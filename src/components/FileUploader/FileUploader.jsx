import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { storage } from '../../config/firebase.config';

const { Dragger } = Upload;

const FileUploader = ({ storagePath = 'files/', onUploadSuccess, onDeleteSuccess }) => {
  const [fileList, setFileList] = useState([]);

  const uploadFile = async file => {
    if (!file || fileList.length >= 1) {
      message.error('You can only upload one file.');
      return;
    }
    if (!file.type.startsWith('image/')) {
      message.error('You can only upload image files!');
      return;
    }
    const fileRef = ref(storage, `${storagePath}${file.name + uuidv4()}`);
    try {
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      const newFile = {
        uid: file.uid,
        name: file.name,
        status: 'done',
        url: url,
      };
      setFileList([newFile]);
      if (onUploadSuccess) {
        onUploadSuccess(url);
      }
      message.success(`${file.name} file uploaded successfully.`);
    } catch (error) {
      console.error('Error uploading file:', error);
      message.error(`${file.name} file upload failed.`);
    }
  };

  const handleRemove = async file => {
    const { uid, url } = file;
    try {
      //   const fileRef = ref(storage, `${storagePath}${file.name}`);
      //   await deleteObject(fileRef);

      setFileList([]);
      if (onDeleteSuccess) {
        onDeleteSuccess(url);
      }
      message.success(`${file.name} file deleted successfully.`);
    } catch (error) {
      console.error('Error deleting file:', error);
      if (error.code === 'storage/object-not-found') {
        message.error('File not found for deletion.');
      } else {
        message.error(error.message || `${file.name} file deletion failed.`);
      }
    }
  };

  const props = {
    name: 'file',
    multiple: false,
    customRequest: ({ file, onSuccess }) => {
      uploadFile(file);
      onSuccess('ok');
    },
    fileList: fileList,
    onRemove: file => {
      handleRemove(file);
    },
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        console.log(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single upload. Strictly prohibited from uploading company data or other banned files.
      </p>
    </Dragger>
  );
};

export default FileUploader;

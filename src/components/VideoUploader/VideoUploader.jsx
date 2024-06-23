import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { VideoCameraAddOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { storage } from '../../config/firebase.config';

const { Dragger } = Upload;

const VideoUploader = ({ storagePath = 'tutorVideo/', onVideoUploadSuccess, onVideoDeleteSuccess }) => {
  const [fileList, setFileList] = useState([]);

  const uploadFile = async file => {
    if (!file || fileList.length >= 1) {
      message.error('You can only upload one video.');
      return;
    }
    if (!file.type.startsWith('video/mp4')) {
      message.error('You can only upload video files!');
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
      if (onVideoUploadSuccess) {
        onVideoUploadSuccess(url);
      }
      message.success(`${file.name} video uploaded successfully.`);
    } catch (error) {
      console.error('Error uploading file:', error);
      message.error(`${file.name} video upload failed.`);
    }
  };

  const handleRemove = async file => {
    const { uid, url } = file;
    try {
      // const fileRef = ref(storage, `${storagePath}${file.name}`);
      // await deleteObject(fileRef);

      setFileList([]);
      if (onVideoDeleteSuccess) {
        onVideoDeleteSuccess(url);
      }
      message.success(`${file.name} video deleted successfully.`);
    } catch (error) {
      console.error('Error deleting file:', error);
      if (error.code === 'storage/object-not-found') {
        message.error('File not found for deletion.');
      } else {
        message.error(error.message || `${file.name} video deletion failed.`);
      }
    }
  };

  const props = {
    name: 'file',
    multiple: false,
    accept: 'video/mp4',
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
        console.log(`${info.file.name} video uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} video upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <VideoCameraAddOutlined />
      </p>
      <p className="ant-upload-text">Click or drag video file to this area to upload</p>
      <p className="ant-upload-hint">
        The system only supports uploading MP4 format files and only supports one upload at a time. Uploading company
        data or other prohibited files is strictly prohibited.
      </p>
    </Dragger>
  );
};

export default VideoUploader;

import { useState } from 'react';
import { Upload, Button } from 'antd';
import ReactPlayer from 'react-player';

const VideoUploader = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const handleUpload = info => {
    if (info.file.status === 'done') {
      setVideoUrl(info.file.response.url);
    }
  };

  return (
    <div>
      <Upload action="/api/upload-video" accept="video/*" onChange={handleUpload} showUploadList={false}>
        <Button>Upload Video</Button>
      </Upload>
      {videoUrl && <ReactPlayer url={videoUrl} controls />}
    </div>
  );
};

export default VideoUploader;

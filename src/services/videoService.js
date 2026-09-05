import api from './api';

export const getVideos = async (courseId = null) => {
  const params = courseId ? { courseId } : {};
  const response = await api.get('/api/videos', { params });
  return response.data;
};

export const uploadVideo = async (courseId, videoFile, title, description, onProgress) => {
  const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB
  const totalChunks = Math.ceil(videoFile.size / CHUNK_SIZE);
  const uploadId = Date.now().toString() + Math.random().toString(36).substr(2, 9);

  let finalResponse = null;

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = 'Upload in progress. Are you sure you want to leave?';
  };
  window.addEventListener('beforeunload', handleBeforeUnload);

  try {
    for (let i = 0; i < totalChunks; i++) {
      const start = i * CHUNK_SIZE;
      const end = Math.min(start + CHUNK_SIZE, videoFile.size);
      const chunk = videoFile.slice(start, end, videoFile.type);

      const formData = new FormData();
      formData.append('chunk', chunk, videoFile.name);
      formData.append('chunkIndex', i);
      formData.append('totalChunks', totalChunks);
      formData.append('uploadId', uploadId);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('fileName', videoFile.name);

      let retries = 3;
      let success = false;
      let response = null;

      while (retries > 0 && !success) {
        try {
          response = await api.post(`/api/videos/upload/chunk/${courseId}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          success = true;
        } catch (err) {
          retries--;
          console.warn(`Chunk ${i} failed. Retrying... (${retries} retries left)`);
          if (retries === 0) throw err;
          // Wait 2 seconds before retrying
          await new Promise(r => setTimeout(r, 2000));
        }
      }

      if (i === totalChunks - 1) {
        finalResponse = response;
      }

      if (onProgress) {
        const progress = Math.round(((i + 1) / totalChunks) * 100);
        onProgress(progress);
      }
    }

    return finalResponse.data;
  } finally {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  }
};

export const deleteVideo = async (videoId) => {
  const response = await api.delete(`/api/videos/${videoId}`);
  return response.data;
};

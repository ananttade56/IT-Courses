import api from './api';

export const getVideos = async (courseId = null) => {
  const params = courseId ? { courseId } : {};
  const response = await api.get('/api/videos', { params });
  return response.data;
};

export const uploadVideo = async (courseId, videoFile, title, description, onProgress) => {
  const CHUNK_SIZE = 50 * 1024 * 1024; // 50MB
  const totalChunks = Math.ceil(videoFile.size / CHUNK_SIZE);
  const uploadId = Date.now().toString() + Math.random().toString(36).substr(2, 9);

  let finalResponse = null;

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

    const response = await api.post(`/api/videos/upload/chunk/${courseId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (i === totalChunks - 1) {
      finalResponse = response;
    }

    if (onProgress) {
      const progress = Math.round(((i + 1) / totalChunks) * 100);
      onProgress(progress);
    }
  }

  return finalResponse.data;
};

export const deleteVideo = async (videoId) => {
  const response = await api.delete(`/api/videos/${videoId}`);
  return response.data;
};

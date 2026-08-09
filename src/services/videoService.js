import api from './api';

export const getVideos = async (courseId = null) => {
  const params = courseId ? { courseId } : {};
  const response = await api.get('/api/videos', { params });
  return response.data;
};

export const uploadVideo = async (courseId, videoFile, title, description) => {
  const formData = new FormData();
  formData.append('video', videoFile);
  formData.append('title', title);
  formData.append('description', description);

  const response = await api.post(`/api/videos/upload/${courseId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const deleteVideo = async (videoId) => {
  const response = await api.delete(`/api/videos/${videoId}`);
  return response.data;
};

import api from './api';

export const fetchCourses = async () => {
  const response = await api.get('/api/admin/course');
  return response.data;
};

export const createCourse = async (courseData) => {
  const response = await api.post('/api/admin/course', courseData);
  return response.data;
};

export const updateCourse = async (id, courseData) => {
  const response = await api.put(`/api/admin/course/${id}`, courseData);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await api.delete(`/api/admin/course/${id}`);
  return response.data;
};

export const fetchPendingStudents = async () => {
  const response = await api.get('/api/admin/pending-students');
  return response.data;
};

export const fetchApprovedStudents = async () => {
  const response = await api.get('/api/admin/approved-students');
  return response.data;
};

export const approveStudent = async (studentId, courseIds = null, role = null) => {
  const data = {};
  if (courseIds !== null) data.courseIds = courseIds;
  if (role !== null) data.role = role;
  const response = await api.post(`/api/admin/approve-student/${studentId}`, data);
  return response.data;
};

export const rejectStudent = async (studentId) => {
  const response = await api.post(`/api/admin/reject-student/${studentId}`);
  return response.data;
};

export const uploadIcon = async (file) => {
  const formData = new FormData();
  formData.append('icon', file);
  const response = await api.post('/api/admin/upload-image', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;
};

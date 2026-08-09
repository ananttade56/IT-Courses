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

export const approveStudent = async (studentId, courseIds = []) => {
  const response = await api.post(`/api/admin/approve-student/${studentId}`, { courseIds });
  return response.data;
};

export const rejectStudent = async (studentId) => {
  const response = await api.post(`/api/admin/reject-student/${studentId}`);
  return response.data;
};

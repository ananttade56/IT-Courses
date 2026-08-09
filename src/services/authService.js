import api from './api';

export const login = async (username, password) => {
  const response = await api.post('/api/auth/login', { username, password });
  return response.data;
};

export const signup = async (username, password, role = 'Student', courseIds = []) => {
  const response = await api.post('/api/auth/signup', { username, password, role, courseIds });
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/api/auth/logout');
  return response.data;
};

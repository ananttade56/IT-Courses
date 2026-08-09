import axios from 'axios';

const DEV_API_URL = 'http://localhost:3000';
const PROD_API_URL = 'https://red-chimpanzee-237853.hostingersite.com/';

const baseURL = import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? DEV_API_URL : PROD_API_URL);

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;

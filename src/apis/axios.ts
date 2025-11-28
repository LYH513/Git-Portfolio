import { BASE_URL } from './config';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // 인증 에러 처리
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;


import { BASE_URL } from './config';
import axios from 'axios';
import { useAuthStore } from '@/stores/useAuthStore';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

// 요청 인터셉터: 토큰을 헤더에 자동 추가
axiosInstance.interceptors.request.use(
  config => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // 디버깅: 요청 정보 로그
    console.log('API 요청:', {
      method: config.method,
      url: config.url,
      baseURL: config.baseURL,
      fullURL: `${config.baseURL}${config.url}`,
      data: config.data,
      headers: config.headers,
    });
    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // 인증 에러 처리
      useAuthStore.getState().clearAuth();
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;


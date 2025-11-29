import { http } from '@/apis/http';
import { AuthRequest, AuthResponse } from '../types';

export const signup = async (data: AuthRequest): Promise<AuthResponse> => {
  return http.post<AuthRequest, AuthResponse>('/auth/signup', data);
};

export const login = async (data: AuthRequest): Promise<AuthResponse> => {
  return http.post<AuthRequest, AuthResponse>('/auth/login', data);
};



import { http } from '@/apis/http';
import { Repository } from '../types';

export const getRepositories = async (): Promise<Repository[]> => {
  return http.get<Repository[]>('/api/github/repositories');
};


import { http } from '@/apis/http';
import { GitHubStatus } from '../types';

export const getGitHubStatus = async (): Promise<GitHubStatus> => {
  return http.get<GitHubStatus>('/api/github/status');
};




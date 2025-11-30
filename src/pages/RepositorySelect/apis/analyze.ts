import { http } from '@/apis/http';

export interface AnalyzeRequest {
  owner: string;
  repo: string;
}

export interface AnalyzeResponse {
  data: string;
}

export const analyzeRepository = async (
  request: AnalyzeRequest,
): Promise<AnalyzeResponse> => {
  return http.post<AnalyzeRequest, AnalyzeResponse>(
    '/api/github/repositories/analyze',
    request,
  );
};


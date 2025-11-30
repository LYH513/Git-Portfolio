import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeRepository } from '../apis/analyze';
import { Repository } from '../types';

export function useCreatePortfolio() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPortfolio = async (repository: Repository) => {
    try {
      setIsLoading(true);
      setError(null);

      // fullName에서 owner와 repo 추출 (예: "owner/repo")
      const [owner, repo] = repository.fullName.split('/');
      
      if (!owner || !repo) {
        throw new Error('레포지토리 정보가 올바르지 않습니다.');
      }

      // 저장소 분석 API 호출
      const response = await analyzeRepository({ owner, repo });

      // Portfolio 페이지로 데이터 전달
      navigate('/portfolio', {
        state: {
          portfolioData: response.data,
          repository: repository,
        },
      });
    } catch (err) {
      console.error('포트폴리오 생성 실패:', err);
      setError(
        err instanceof Error
          ? err.message
          : '포트폴리오 생성에 실패했습니다.',
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createPortfolio,
    isLoading,
    error,
  };
}


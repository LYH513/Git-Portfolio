import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PortfolioState } from '../types';

export function usePortfolioData() {
  const location = useLocation();
  const navigate = useNavigate();
  const [portfolioData, setPortfolioData] = useState<string | null>(null);
  const [repository, setRepository] = useState<PortfolioState['repository'] | null>(null);

  useEffect(() => {
    const state = location.state as PortfolioState | null;
    
    if (state?.portfolioData && state?.repository) {
      setPortfolioData(state.portfolioData);
      setRepository(state.repository);
    } else {
      // 데이터가 없으면 레포지토리 선택 페이지로 리다이렉트
      navigate('/repository-add');
    }
  }, [location.state, navigate]);

  return {
    portfolioData,
    repository,
  };
}


import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGitHubStatus } from '../../Home/apis/github';
import { useGitHubStore } from '@/stores/useGitHubStore';

export function useGitHubStatusCheck() {
  const navigate = useNavigate();
  const { connected, setGitHubStatus } = useGitHubStore();

  useEffect(() => {
    const checkGitHubStatus = async () => {
      try {
        const status = await getGitHubStatus();
        console.log('RepositorySelectPage - GitHub 상태:', status);
        
        setGitHubStatus(status.connected, status.githubName);
        
        if (!status.connected) {
          console.warn('GitHub가 연결되지 않았습니다. 홈으로 이동합니다.');
          navigate('/');
        }
      } catch (error) {
        console.error('GitHub 상태 확인 실패:', error);
        navigate('/');
      }
    };

    checkGitHubStatus();
  }, [navigate, setGitHubStatus]);

  return { connected };
}


import { useNavigate } from 'react-router-dom';
import { getGitHubStatus } from '../apis/github';
import { useGitHubStore } from '@/stores/useGitHubStore';
import { BASE_URL } from '@/apis/config';

export function useGitHubConnection() {
  const navigate = useNavigate();
  const setGitHubStatus = useGitHubStore(state => state.setGitHubStatus);

  const checkGitHubStatus = async (): Promise<boolean> => {
    try {
      console.log('GitHub 상태 확인 시작...');
      const status = await getGitHubStatus();
      console.log('GitHub 상태 응답:', status);
      setGitHubStatus(status.connected, status.githubName);
      
      if (status.connected) {
        // 연결되어 있으면 repository-add 페이지로 이동
        console.log('GitHub 연결됨, repository-add로 이동');
        navigate('/repository-add');
        return true;
      }
      console.log('GitHub 연결 안됨, OAuth 연결 필요');
      return false;
    } catch (error) {
      console.error('GitHub 상태 확인 실패:', error);
      return false;
    }
  };

  const connectGitHub = () => {
    // GitHub OAuth 연결 시작
    const connectUrl = `${BASE_URL}/auth/github/connect`;
    window.location.href = connectUrl;
  };

  return {
    checkGitHubStatus,
    connectGitHub,
  };
}


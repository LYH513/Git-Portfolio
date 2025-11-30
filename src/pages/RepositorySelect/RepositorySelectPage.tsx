import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGitHubStatus } from '../Home/apis/github';
import { useGitHubStore } from '@/stores/useGitHubStore';

function RepositorySelectPage() {
  const navigate = useNavigate();
  const { connected, githubName, setGitHubStatus } = useGitHubStore();
  
  useEffect(() => {
    const checkGitHubStatus = async () => {
      try {
        // API에서 최신 상태 확인
        const status = await getGitHubStatus();
        console.log('RepositorySelectPage - GitHub 상태:', status);
        
        // 스토어 업데이트
        setGitHubStatus(status.connected, status.githubName);
        
        // 연결되지 않았다면 홈으로 리다이렉트
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

  // 연결되지 않은 경우 로딩 표시
  if (!connected) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
          <p className="text-gray-600">GitHub 연결 상태를 확인하는 중...</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h1>프로젝트 생성</h1>
      {githubName && (
        <p>연결된 GitHub 계정: {githubName}</p>
      )}
    </main>
  );
}

export default RepositorySelectPage;
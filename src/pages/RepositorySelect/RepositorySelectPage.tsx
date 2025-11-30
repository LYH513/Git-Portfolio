import { useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
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
      <LoadingMain>
        <LoadingContainer>
          <Spinner />
          <LoadingText>GitHub 연결 상태를 확인하는 중...</LoadingText>
        </LoadingContainer>
      </LoadingMain>
    );
  }

  return (
    <Main>
      <Title>프로젝트 생성</Title>
      {githubName && (
        <Description>연결된 GitHub 계정: {githubName}</Description>
      )}
    </Main>
  );
}

export default RepositorySelectPage;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingMain = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingContainer = styled.div`
  text-align: center;
`;

const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 2px solid #2563eb;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto 1rem;
`;

const LoadingText = styled.p`
  color: #4b5563;
`;

const Main = styled.main`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #4b5563;
`;
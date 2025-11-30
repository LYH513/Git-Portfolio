import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getGitHubStatus } from '../Home/apis/github';
import { useGitHubStore } from '@/stores/useGitHubStore';

export default function GitHubCallbackPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const setGitHubStatus = useGitHubStore(state => state.setGitHubStatus);
  const [status, setStatus] = useState<'checking' | 'success' | 'error'>('checking');
  const [message, setMessage] = useState('GitHub 연결을 확인하는 중...');

  useEffect(() => {
    const checkStatus = async () => {
      try {
        // URL 파라미터에서 code 확인 (서버 콜백에서 온 경우)
        const code = searchParams.get('code');
        console.log('GitHub 콜백 code:', code);

        // GitHub 연결 상태 확인
        const githubStatus = await getGitHubStatus();
        setGitHubStatus(githubStatus.connected, githubStatus.githubName);
        
        if (githubStatus.connected) {
          setStatus('success');
          setMessage('GitHub 연결이 완료되었습니다!');
          
          // 1초 후 repository-add 페이지로 이동
          setTimeout(() => {
            navigate('/repository-add');
          }, 1000);
        } else {
          setStatus('error');
          setMessage('GitHub 연결에 실패했습니다.');
          
          // 2초 후 홈으로 이동
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      } catch (error) {
        console.error('GitHub 상태 확인 실패:', error);
        setStatus('error');
        setMessage('연결 상태를 확인할 수 없습니다.');
        
        // 2초 후 홈으로 이동
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    };

    checkStatus();
  }, [navigate, setGitHubStatus, searchParams]);

  return (
    <Container>
      <Content>
        {status === 'checking' && (
          <>
            <Spinner />
            <Message>{message}</Message>
          </>
        )}
        {status === 'success' && (
          <>
            <SuccessIcon>
              <CheckIcon
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </CheckIcon>
            </SuccessIcon>
            <SuccessMessage>{message}</SuccessMessage>
            <SubMessage>리포지토리 선택 페이지로 이동합니다...</SubMessage>
          </>
        )}
        {status === 'error' && (
          <>
            <ErrorIcon>
              <XIcon
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </XIcon>
            </ErrorIcon>
            <ErrorMessage>{message}</ErrorMessage>
            <SubMessage>홈으로 이동합니다...</SubMessage>
          </>
        )}
      </Content>
    </Container>
  );
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
`;

const Content = styled.div`
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

const Message = styled.p`
  color: #4b5563;
`;

const SuccessIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #d1fae5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;

const CheckIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  color: #059669;
`;

const SuccessMessage = styled.p`
  color: #374151;
  font-weight: 500;
`;

const ErrorIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #fee2e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;

const XIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  color: #dc2626;
`;

const ErrorMessage = styled.p`
  color: #374151;
  font-weight: 500;
`;

const SubMessage = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.5rem;
`;


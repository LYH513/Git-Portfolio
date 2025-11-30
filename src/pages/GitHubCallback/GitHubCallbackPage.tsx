import { useEffect, useState } from 'react';
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {status === 'checking' && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
            <p className="text-gray-600">{message}</p>
          </>
        )}
        {status === 'success' && (
          <>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-green-600"
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
              </svg>
            </div>
            <p className="text-gray-700 font-medium">{message}</p>
            <p className="text-sm text-gray-500 mt-2">리포지토리 선택 페이지로 이동합니다...</p>
          </>
        )}
        {status === 'error' && (
          <>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-red-600"
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
              </svg>
            </div>
            <p className="text-gray-700 font-medium">{message}</p>
            <p className="text-sm text-gray-500 mt-2">홈으로 이동합니다...</p>
          </>
        )}
      </div>
    </div>
  );
}


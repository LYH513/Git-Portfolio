import { useState } from 'react';
import AddProjectModal from './AddProjectModal';
import { useGitHubConnection } from '../hooks/useGitHubConnection';

export default function CreateProjectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { checkGitHubStatus, connectGitHub } = useGitHubConnection();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImportFromGitHub = async () => {
    handleCloseModal();
    
    try {
      // GitHub 연결 상태 확인
      console.log('GitHub 가져오기 버튼 클릭, 상태 확인 중...');
      const isConnected = await checkGitHubStatus();
      console.log('연결 상태:', isConnected);
      
      if (!isConnected) {
        // 연결되어 있지 않으면 GitHub OAuth 연결 시작
        console.log('GitHub OAuth 연결 시작');
        connectGitHub();
      }
    } catch (error) {
      console.error('GitHub 연결 처리 중 오류:', error);
      // 오류 발생 시에도 OAuth 연결 시도
      connectGitHub();
    }
  };

  const handleCreateManually = () => {
    // TODO: 수동 생성 기능 구현
    console.log('수동으로 생성하기');
    handleCloseModal();
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-end">
        <button
          type="button"
          onClick={handleOpenModal}
          className="px-6 py-3 bg-[#2563EB] text-white rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors shadow-sm"
        >
          프로젝트 생성
        </button>
      </div>
      <AddProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onImportFromGitHub={handleImportFromGitHub}
        onCreateManually={handleCreateManually}
      />
    </>
  );
}



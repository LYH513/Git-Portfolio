import { useState } from 'react';
import styled from '@emotion/styled';
import AddProjectModal from './AddProjectModal';
import CommitConventionModal from './CommitConventionModal';
import ConventionButton from './ConventionButton';
import { useGitHubConnection } from '../hooks/useGitHubConnection';

export default function CreateProjectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConventionModalOpen, setIsConventionModalOpen] = useState(false);
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
      <ButtonContainer>
        <ConventionButton onClick={() => setIsConventionModalOpen(true)} />
        <CreateButton type="button" onClick={handleOpenModal}>
          프로젝트 생성
        </CreateButton>
      </ButtonContainer>
      <AddProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onImportFromGitHub={handleImportFromGitHub}
        onCreateManually={handleCreateManually}
      />
      <CommitConventionModal
        isOpen={isConventionModalOpen}
        onClose={() => setIsConventionModalOpen(false)}
      />
    </>
  );
}

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const CreateButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #1d4ed8;
  }
`;



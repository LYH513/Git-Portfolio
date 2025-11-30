import styled from '@emotion/styled';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportFromGitHub: () => void;
  onCreateManually: () => void;
}

export default function AddProjectModal({
  isOpen,
  onClose,
  onImportFromGitHub,
  onCreateManually,
}: AddProjectModalProps) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>프로젝트 추가</ModalTitle>
          <CloseButton type="button" onClick={onClose}>
            <CloseIcon
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
            </CloseIcon>
          </CloseButton>
        </ModalHeader>

        <Description>프로젝트를 추가하는 방법을 선택하세요</Description>

        <OptionsContainer>
          <GitHubButton type="button" onClick={onImportFromGitHub}>
            <GitHubIconContainer>
              <GitHubIcon
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </GitHubIcon>
            </GitHubIconContainer>
            <ButtonText>
              <ButtonTitle>GitHub에서 가져오기</ButtonTitle>
              <ButtonSubtitle>프로젝트 정보를 자동으로 가져옵니다</ButtonSubtitle>
            </ButtonText>
          </GitHubButton>

          <ManualButton type="button" onClick={onCreateManually}>
            <ManualIconContainer>
              <EditIcon
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </EditIcon>
            </ManualIconContainer>
            <ButtonText>
              <ButtonTitle>수동으로 생성하기</ButtonTitle>
              <ButtonSubtitleBlue>프로젝트 정보를 직접 입력합니다</ButtonSubtitleBlue>
            </ButtonText>
          </ManualButton>
        </OptionsContainer>
      </ModalContent>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 28rem;
  margin: 0 1rem;
  padding: 1.5rem;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
`;

const CloseButton = styled.button`
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #4b5563;
  }
`;

const CloseIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
`;

const Description = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const GitHubButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #111827;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1f2937;
  }
`;

const GitHubIconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #374151;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const GitHubIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
`;

const ManualButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #eff6ff;
  border: 2px solid #2563eb;
  color: #2563eb;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #dbeafe;
  }
`;

const ManualIconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #2563eb;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const EditIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: white;
`;

const ButtonText = styled.div`
  flex: 1;
  text-align: left;
`;

const ButtonTitle = styled.div`
  font-weight: 600;
`;

const ButtonSubtitle = styled.div`
  font-size: 0.875rem;
  color: #d1d5db;
  margin-top: 0.125rem;
`;

const ButtonSubtitleBlue = styled.div`
  font-size: 0.875rem;
  color: #2563eb;
  margin-top: 0.125rem;
`;


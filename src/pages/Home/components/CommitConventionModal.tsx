import styled from '@emotion/styled';

interface CommitConventionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommitExample {
  type: string;
  message: string;
  description: string;
  color: string;
}

const commitExamples: CommitExample[] = [
  {
    type: 'feat',
    message: '로그인 API 추가',
    description: '새로운 기능 구현',
    color: '#10b981',
  },
  {
    type: 'fix',
    message: 'null 포인터 크래시 해결',
    description: '버그 수정',
    color: '#ef4444',
  },
  {
    type: 'refactor',
    message: 'DB 쿼리 최적화',
    description: '코드 개선',
    color: '#3b82f6',
  },
  {
    type: 'docs',
    message: 'README 업데이트',
    description: '문서 업데이트',
    color: '#f59e0b',
  },
  {
    type: 'test',
    message: '서비스 레이어 단위 테스트 추가',
    description: '테스트 추가',
    color: '#8b5cf6',
  },
];

export default function CommitConventionModal({
  isOpen,
  onClose,
}: CommitConventionModalProps) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <Title>
            <TitleIcon>〈/〉</TitleIcon>
            커밋 컨벤션 예시
          </Title>
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

        <Subtitle>
          커밋 메시지를 작성할 때 커밋 컨벤션을 준수하면 포트폴리오의 퀄리티가 높아집니다.
        </Subtitle>

        <ExamplesList>
          {commitExamples.map((example, index) => (
            <ExampleCard key={index} highlight={index === -1}>
              <ExampleHeader>
                <ColorDot color={example.color} />
                <CommitMessage>
                  {example.type}: {example.message}
                </CommitMessage>
              </ExampleHeader>
              <Description>{example.description}</Description>
            </ExampleCard>
          ))}
        </ExamplesList>
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
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.5rem;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

const TitleIcon = styled.span`
  font-size: 1.25rem;
  color: #2563eb;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  padding: 0.25rem;

  &:hover {
    color: #4b5563;
  }
`;

const CloseIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
`;

const ExamplesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ExampleCard = styled.div<{ highlight: boolean }>`
  padding: 1rem;
  border: 2px solid ${props => (props.highlight ? '#2563eb' : '#e5e7eb')};
  border-radius: 0.5rem;
  background-color: ${props => (props.highlight ? '#eff6ff' : 'white')};
  transition: all 0.2s;

  &:hover {
    border-color: #2563eb;
    background-color: #f8fafc;
  }
`;

const ExampleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

const ColorDot = styled.div<{ color: string }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  flex-shrink: 0;
`;

const CommitMessage = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
`;

const Description = styled.div`
  font-size: 0.8125rem;
  color: #6b7280;
  margin-left: 1.75rem;
`;


import styled from '@emotion/styled';

interface CreatePortfolioButtonProps {
  disabled: boolean;
  isLoading?: boolean;
  onClick: () => void;
}

export default function CreatePortfolioButton({
  disabled,
  isLoading = false,
  onClick,
}: CreatePortfolioButtonProps) {
  return (
    <Button disabled={disabled || isLoading} onClick={onClick}>
      {isLoading ? '생성 중...' : '포트폴리오 생성하기'}
    </Button>
  );
}

const Button = styled.button`
  padding: 0.75rem 2rem;
  background-color: #2563eb;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #1d4ed8;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;


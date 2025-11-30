import styled from '@emotion/styled';

interface ConventionButtonProps {
  onClick: () => void;
}

export default function ConventionButton({ onClick }: ConventionButtonProps) {
  return (
    <Button type="button" onClick={onClick}>
      깃허브 컨벤션
    </Button>
  );
}

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: #374151;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
  }
`;


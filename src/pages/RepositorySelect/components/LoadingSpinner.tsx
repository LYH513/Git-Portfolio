import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface LoadingSpinnerProps {
  message?: string;
}

export default function LoadingSpinner({ message = '로딩 중...' }: LoadingSpinnerProps) {
  return (
    <Container>
      <Spinner />
      <Message>{message}</Message>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
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


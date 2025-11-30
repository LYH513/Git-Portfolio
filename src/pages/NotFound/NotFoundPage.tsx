import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Main>
      <Container>
        <Title>404</Title>
        <Subtitle>페이지를 찾을 수 없습니다</Subtitle>
        <Description>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </Description>
        <HomeButton onClick={() => navigate('/')}>
          홈으로 돌아가기
        </HomeButton>
      </Container>
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
`;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 9rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #4b5563;
  margin-bottom: 2rem;
`;

const HomeButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;


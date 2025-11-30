import styled from '@emotion/styled';

function PortfolioPage() {
  return (
    <Main>
      <Title>포트폴리오</Title>
    </Main>
  );
}

export default PortfolioPage;

const Main = styled.main`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;
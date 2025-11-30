import styled from '@emotion/styled';
import { usePortfolioData } from './hooks/usePortfolioData';
import LoadingSpinner from '../RepositorySelect/components/LoadingSpinner';
import MarkdownViewer from './components/MarkdownViewer';

function PortfolioPage() {
  const { portfolioData, repository } = usePortfolioData();

  if (!portfolioData || !repository) {
    return <LoadingSpinner message="포트폴리오를 불러오는 중..." />;
  }

  return (
    <Container>
      <Header>
        <Title>{repository.name}</Title>
        {repository.description && (
          <Description>{repository.description}</Description>
        )}
        <RepositoryInfo>
          <InfoItem>
            <InfoLabel>저장소:</InfoLabel>
            <InfoValue>{repository.fullName}</InfoValue>
          </InfoItem>
          {repository.language && (
            <InfoItem>
              <InfoLabel>언어:</InfoLabel>
              <InfoValue>{repository.language}</InfoValue>
            </InfoItem>
          )}
          <InfoItem>
            <InfoLabel>업데이트:</InfoLabel>
            <InfoValue>{new Date(repository.updatedAt).toLocaleDateString('ko-KR')}</InfoValue>
          </InfoItem>
        </RepositoryInfo>
      </Header>
      <Content>
        <MarkdownViewer content={portfolioData} />
      </Content>
    </Container>
  );
}

export default PortfolioPage;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 640px) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #6b7280;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const RepositoryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoLabel = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
`;

const InfoValue = styled.span`
  color: #111827;
  font-size: 0.875rem;
`;

const Content = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;
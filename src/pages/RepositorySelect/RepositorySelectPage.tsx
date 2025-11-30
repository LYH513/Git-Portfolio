import styled from '@emotion/styled';
import { useGitHubStore } from '@/stores/useGitHubStore';
import { useGitHubStatusCheck } from './hooks/useGitHubStatusCheck';
import { useRepositorySelect } from './hooks/useRepositorySelect';
import { useCreatePortfolio } from './hooks/useCreatePortfolio';
import LoadingSpinner from './components/LoadingSpinner';
import RepositorySearch from './components/RepositorySearch';
import RepositoryList from './components/RepositoryList';
import CreatePortfolioButton from './components/CreatePortfolioButton';
import Pagination from './components/Pagination';

function RepositorySelectPage() {
  const { connected } = useGitHubStatusCheck();
  const { githubName } = useGitHubStore();
  const {
    repositories,
    searchQuery,
    setSearchQuery,
    selectedRepository,
    handleRepositorySelect,
    currentPage,
    setCurrentPage,
    totalPages,
    isLoading,
    error,
  } = useRepositorySelect();
  const { createPortfolio, isLoading: isCreating } = useCreatePortfolio();

  const handleCreatePortfolio = async () => {
    if (!selectedRepository) {
      return;
    }
    try {
      await createPortfolio(selectedRepository);
    } catch (err) {
      // 에러는 useCreatePortfolio에서 처리됨
    }
  };

  if (!connected) {
    return <LoadingSpinner message="GitHub 연결 상태를 확인하는 중..." />;
  }

  return (
    <Container>
      <Header>
        <Title>레포지토리 선택</Title>
        <HeaderRight>
          {githubName && (
            <Description>연결된 GitHub 계정: {githubName}</Description>
          )}
          <CreatePortfolioButton
            disabled={!selectedRepository}
            isLoading={isCreating}
            onClick={handleCreatePortfolio}
          />
        </HeaderRight>
      </Header>

      {isLoading ? (
        <LoadingSpinner message="레포지토리를 불러오는 중..." />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <>
          <RepositorySearch value={searchQuery} onChange={setSearchQuery} />
          <RepositoryList
            repositories={repositories}
            selectedRepository={selectedRepository}
            onSelect={handleRepositorySelect}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </Container>
  );
}

export default RepositorySelectPage;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Description = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
  text-align: right;
`;

const ErrorMessage = styled.div`
  padding: 1.5rem;
  background-color: #fef2f2;
  color: #dc2626;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 500;
`;
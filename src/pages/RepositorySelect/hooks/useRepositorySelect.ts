import { useState, useEffect, useMemo } from 'react';
import { getRepositories } from '../apis/repositories';
import { Repository } from '../types';

export function useRepositorySelect() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRepository, setSelectedRepository] = useState<Repository | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getRepositories();
        setRepositories(data);
      } catch (err) {
        console.error('레포지토리 조회 실패:', err);
        setError('레포지토리를 불러오는데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const filteredRepositories = useMemo(() => {
    if (!searchQuery.trim()) {
      return repositories;
    }
    const query = searchQuery.toLowerCase();
    return repositories.filter(repo => 
      repo.name.toLowerCase().includes(query) ||
      repo.fullName.toLowerCase().includes(query)
    );
  }, [repositories, searchQuery]);

  const handleRepositorySelect = (repository: Repository) => {
    // 이미 선택된 레포지토리를 다시 클릭하면 선택 해제
    if (selectedRepository?.id === repository.id) {
      setSelectedRepository(null);
    } else {
      setSelectedRepository(repository);
    }
  };

  const handleCreatePortfolio = () => {
    if (!selectedRepository) {
      return;
    }
    // TODO: 포트폴리오 생성 로직 구현
    console.log('포트폴리오 생성:', selectedRepository);
  };

  return {
    repositories: filteredRepositories,
    searchQuery,
    setSearchQuery,
    selectedRepository,
    handleRepositorySelect,
    handleCreatePortfolio,
    isLoading,
    error,
  };
}


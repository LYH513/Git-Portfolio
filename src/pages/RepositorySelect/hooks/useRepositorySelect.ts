import { useState, useEffect, useMemo } from 'react';
import { getRepositories } from '../apis/repositories';
import { Repository } from '../types';

const ITEMS_PER_PAGE = 12;

export function useRepositorySelect() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRepository, setSelectedRepository] = useState<Repository | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
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

  // 페이지네이션된 리스트
  const paginatedRepositories = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredRepositories.slice(startIndex, endIndex);
  }, [filteredRepositories, currentPage]);

  // 전체 페이지 수
  const totalPages = useMemo(() => {
    return Math.ceil(filteredRepositories.length / ITEMS_PER_PAGE);
  }, [filteredRepositories.length]);

  // 검색어 변경 시 첫 페이지로 리셋
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleRepositorySelect = (repository: Repository) => {
    // 이미 선택된 레포지토리를 다시 클릭하면 선택 해제
    if (selectedRepository?.id === repository.id) {
      setSelectedRepository(null);
    } else {
      setSelectedRepository(repository);
    }
  };

  return {
    repositories: paginatedRepositories,
    allRepositories: filteredRepositories,
    searchQuery,
    setSearchQuery,
    selectedRepository,
    handleRepositorySelect,
    currentPage,
    setCurrentPage,
    totalPages,
    isLoading,
    error,
  };
}


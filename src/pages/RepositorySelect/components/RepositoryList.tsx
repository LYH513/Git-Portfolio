import styled from '@emotion/styled';
import { Repository } from '../types';

interface RepositoryListProps {
  repositories: Repository[];
  selectedRepository: Repository | null;
  onSelect: (repository: Repository) => void;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return '오늘';
  } else if (diffDays === 1) {
    return '어제';
  } else if (diffDays < 7) {
    return `${diffDays}일 전`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks}주 전`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months}개월 전`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years}년 전`;
  }
};

export default function RepositoryList({
  repositories,
  selectedRepository,
  onSelect,
}: RepositoryListProps) {
  if (repositories.length === 0) {
    return (
      <EmptyState>
        <EmptyText>검색 결과가 없습니다.</EmptyText>
      </EmptyState>
    );
  }

  return (
    <ListContainer>
      {repositories.map(repository => {
        const isSelected = selectedRepository?.id === repository.id;
        return (
          <RepositoryCard
            key={repository.id}
            selected={isSelected}
            data-selected={isSelected}
            onClick={() => onSelect(repository)}
          >
          <CardContent>
            <CardHeader>
              <RepositoryName>{repository.name}</RepositoryName>
              {repository.isPrivate && <PrivateBadge>Private</PrivateBadge>}
            </CardHeader>
            {repository.description && (
              <Description>{repository.description}</Description>
            )}
          </CardContent>
          <CardFooter>
            {repository.language && (
              <LanguageBadge>{repository.language}</LanguageBadge>
            )}
            <UpdatedAt>
              업데이트: {formatDate(repository.updatedAt)}
            </UpdatedAt>
          </CardFooter>
          {isSelected && (
            <SelectedIndicator>
              <CheckIcon
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </CheckIcon>
            </SelectedIndicator>
          )}
        </RepositoryCard>
        );
      })}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const RepositoryCard = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 2px solid ${props => (props.selected ? '#2563eb' : '#e5e7eb')};
  border-radius: 0.75rem;
  background-color: ${props => (props.selected ? '#eff6ff' : 'white')};
  cursor: pointer;
  transition: all 0.2s;
  min-height: 150px;
  position: relative;

  /* 선택 상태 스타일 */
  ${props =>
    props.selected &&
    `
    border-width: 3px;
    box-shadow: 0 4px 12px -2px rgba(37, 99, 235, 0.3);
  `}

  /* 호버 상태 스타일 (선택되지 않은 경우만) */
  &:hover:not([data-selected='true']) {
    border-color: #3b82f6;
    background-color: #f8fafc;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }

`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const RepositoryName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const PrivateBadge = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: #fef3c7;
  color: #92400e;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.25rem;
`;

const Description = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
`;

const LanguageBadge = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: #eff6ff;
  color: #2563eb;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
`;

const UpdatedAt = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
  margin-left: auto;
  text-align: right;
`;

const EmptyState = styled.div`
  padding: 3rem;
  text-align: center;
`;

const EmptyText = styled.p`
  color: #9ca3af;
  font-size: 1rem;
`;

const SelectedIndicator = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  background-color: #2563eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const CheckIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`;


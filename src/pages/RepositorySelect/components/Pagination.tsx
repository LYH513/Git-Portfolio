import styled from '@emotion/styled';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // 전체 페이지가 5개 이하면 모두 표시
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 첫 페이지
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      // 현재 페이지 주변
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // 마지막 페이지
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Container>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전
      </Button>
      <PageNumbers>
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return <Ellipsis key={`ellipsis-${index}`}>...</Ellipsis>;
          }

          const pageNum = page as number;
          return (
            <PageButton
              key={pageNum}
              active={currentPage === pageNum}
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </PageButton>
          );
        })}
      </PageNumbers>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  color: #374151;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: #f9fafb;
    border-color: #9ca3af;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const PageButton = styled.button<{ active: boolean }>`
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0 0.5rem;
  background-color: ${props => (props.active ? '#2563eb' : 'white')};
  color: ${props => (props.active ? 'white' : '#374151')};
  border: 1px solid ${props => (props.active ? '#2563eb' : '#d1d5db')};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: ${props => (props.active ? 600 : 500)};
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: ${props => (props.active ? '#1d4ed8' : '#f9fafb')};
    border-color: ${props => (props.active ? '#1d4ed8' : '#9ca3af')};
  }
`;

const Ellipsis = styled.span`
  padding: 0 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
`;


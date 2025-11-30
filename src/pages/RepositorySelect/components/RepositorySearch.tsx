import styled from '@emotion/styled';

interface RepositorySearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RepositorySearch({ value, onChange }: RepositorySearchProps) {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="레포지토리 이름으로 검색..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;


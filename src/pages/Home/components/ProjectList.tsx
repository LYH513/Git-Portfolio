import styled from '@emotion/styled';

export default function ProjectList() {
  // TODO: 프로젝트 리스트 데이터를 받아서 렌더링
  // 현재는 outline만 표시
  const placeholderCount = 6; // 2줄 x 3개

  return (
    <Container>
      <Grid>
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <Card key={index}>
            <PlaceholderText>프로젝트 카드 영역</PlaceholderText>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem 2rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  border: 2px dashed #d1d5db;
  border-radius: 0.5rem;
  padding: 2rem;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaceholderText = styled.span`
  color: #9ca3af;
  font-size: 0.875rem;
`;



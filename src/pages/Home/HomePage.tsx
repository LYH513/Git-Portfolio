import styled from '@emotion/styled';
import CreateProjectButton from './components/CreateProjectButton';
import ProjectList from './components/ProjectList';

function HomePage() {
  return (
    <Main>
      <CreateProjectButton />
      <ProjectList />
    </Main>
  );
}

export default HomePage;

const Main = styled.main`
  padding-top: 1rem;
`;

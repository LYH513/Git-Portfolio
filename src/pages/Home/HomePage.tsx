import CreateProjectButton from './components/CreateProjectButton';
import ProjectList from './components/ProjectList';

function HomePage() {
  return (
    <main className="pt-4">
      <CreateProjectButton />
      <ProjectList />
    </main>
  );
}

export default HomePage;

import Header from './components/Header';
import CreateProjectButton from './components/CreateProjectButton';
import ProjectList from './components/ProjectList';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-4">
        <CreateProjectButton />
        <ProjectList />
      </main>
    </div>
  );
}

export default HomePage;

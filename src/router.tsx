import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import RepositorySelectPage from './pages/RepositorySelect/RepositorySelectPage';
import GitHubCallbackPage from './pages/GitHubCallback/GitHubCallbackPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout>
          <HomePage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  { path: '/login', element: <LoginPage /> },
  {
    path: '/portfolio',
    element: (
      <ProtectedRoute>
        <Layout>
          <PortfolioPage/>
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/repository-add',
    element: (
      <ProtectedRoute>
        <Layout>
          <RepositorySelectPage/>
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/auth/github/callback',
    element: (
      <ProtectedRoute>
        <Layout>
          <GitHubCallbackPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: (
      <ProtectedRoute>
        <Layout>
          <NotFoundPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
]);

export default router;


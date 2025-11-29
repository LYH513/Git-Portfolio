import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import PortporioPage from './pages/Portporio/PortporioPage';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  { path: '/login', element: <LoginPage /> },
  {
    path: '/portfolio',
    element: (
      <ProtectedRoute>
        <PortporioPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;


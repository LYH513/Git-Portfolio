import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/useAuthStore';

export function useLogout() {
  const navigate = useNavigate();
  const clearAuth = useAuthStore(state => state.clearAuth);

  const logout = () => {
    clearAuth();
    navigate('/login');
  };

  return { logout };
}



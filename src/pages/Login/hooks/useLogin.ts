import { useNavigate } from 'react-router-dom';
import { login } from '../apis/auth';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAuthForm } from './useAuthForm';
import { useErrorHandler } from './useErrorHandler';

export function useLogin() {
  const navigate = useNavigate();
  const setAuth = useAuthStore(state => state.setAuth);
  const form = useAuthForm();
  const { handleError } = useErrorHandler();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    form.setError('');
    form.setIsLoading(true);

    try {
      const { email, password } = form.trimInputs();
      console.log('로그인 시도:', { email, password });
      const response = await login({ email, password });
      console.log('로그인 성공:', response);
      setAuth(response.token, response.userId, response.email);
      navigate('/');
    } catch (err: any) {
      handleError(err, form.setError);
    } finally {
      form.setIsLoading(false);
    }
  };

  return {
    ...form,
    handleSubmit,
  };
}


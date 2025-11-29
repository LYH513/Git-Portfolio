import { useNavigate } from 'react-router-dom';
import { signup } from '../apis/auth';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAuthForm } from './useAuthForm';
import { useErrorHandler } from './useErrorHandler';

export function useSignup() {
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
      const response = await signup({ email, password });
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


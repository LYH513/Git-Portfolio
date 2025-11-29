import { useState } from 'react';

export function useAuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setError('');
    setIsLoading(false);
  };

  const trimInputs = () => {
    return {
      email: email.trim(),
      password: password.trim(),
    };
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    isLoading,
    setIsLoading,
    resetForm,
    trimInputs,
  };
}


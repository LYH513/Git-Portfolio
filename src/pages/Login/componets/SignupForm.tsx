import styled from '@emotion/styled';
import { useSignup } from '../hooks/useSignup';

export default function SignupForm() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isLoading,
    handleSubmit,
  } = useSignup();

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="signup-email">이메일</Label>
        <Input
          id="signup-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="이메일을 입력하세요"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="signup-password">비밀번호</Label>
        <Input
          id="signup-password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholder="비밀번호를 입력하세요"
        />
      </FormGroup>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? '회원가입 중...' : '회원가입'}
      </SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px #2563eb;
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.875rem;
  color: #ef4444;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.625rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #1d4ed8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;



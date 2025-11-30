import { useState } from 'react';
import styled from '@emotion/styled';
import LoginForm from './componets/LoginForm';
import SignupForm from './componets/SignupForm';

function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <Container>
      <Card>
        <Header>
          <Title>깃-포트폴리오</Title>
          <Description>계정에 로그인하거나 새 계정을 만드세요</Description>
        </Header>

        <TabContainer>
          <TabButton
            type="button"
            onClick={() => setActiveTab('login')}
            active={activeTab === 'login'}
          >
            로그인
          </TabButton>
          <TabButton
            type="button"
            onClick={() => setActiveTab('signup')}
            active={activeTab === 'signup'}
          >
            회원가입
          </TabButton>
        </TabContainer>

        <FormContainer>
          {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
        </FormContainer>
      </Card>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  padding: 1rem;
`;

const Card = styled.div`
  width: 100%;
  max-width: 28rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #4b5563;
  text-align: center;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  padding: 0.25rem;
`;

const TabButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 0.625rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  background-color: ${props => (props.active ? 'white' : 'transparent')};
  color: ${props => (props.active ? '#2563eb' : '#4b5563')};
  box-shadow: ${props => (props.active ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' : 'none')};

  &:hover {
    color: ${props => (props.active ? '#2563eb' : '#111827')};
  }
`;

const FormContainer = styled.div`
  margin-top: 1.5rem;
`;

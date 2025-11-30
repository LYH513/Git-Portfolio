import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useLogout } from '../pages/Home/hooks/useLogout';

export default function Header() {
  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={handleLogoClick}>깃포트폴리오</Logo>
        <LogoutButton type="button" onClick={logout}>
          로그아웃
        </LogoutButton>
      </HeaderContent>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
  background-color: white;
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #2563eb;
  }
`;


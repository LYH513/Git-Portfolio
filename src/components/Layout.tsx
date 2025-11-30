import styled from '@emotion/styled';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
`;


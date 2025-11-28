import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>로그인</h1>
      <p>로그인 페이지</p>
      <button type="button" onClick={() => navigate('/')}>
      </button>
    </main>
  );
}

export default LoginPage;
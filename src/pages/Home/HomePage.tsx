import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>홈</h1>
      <p>프로젝트 템플릿이 정상적으로 동작하는지 확인하는 테스트 페이지입니다.</p>
      <button type="button" onClick={() => navigate('/about')}>
        소개 페이지로 이동
      </button>
    </main>
  );
}

export default HomePage;


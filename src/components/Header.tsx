import { useNavigate } from 'react-router-dom';
import { useLogout } from '../pages/Home/hooks/useLogout';

export default function Header() {
  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 
          onClick={handleLogoClick}
          className="text-2xl font-bold text-[#2563EB] cursor-pointer hover:opacity-80 transition-opacity"
        >
          깃포트폴리오
        </h1>
        <button
          type="button"
          onClick={logout}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
        >
          로그아웃
        </button>
      </div>
    </header>
  );
}


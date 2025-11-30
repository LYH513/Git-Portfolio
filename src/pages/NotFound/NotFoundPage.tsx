import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#2563EB] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">페이지를 찾을 수 없습니다</h2>
        <p className="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-[#2563EB] text-white font-medium rounded-lg hover:bg-[#1d4ed8] transition-colors"
        >
          홈으로 돌아가기
        </button>
      </div>
    </main>
  );
}


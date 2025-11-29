import { useState } from 'react';
import LoginForm from './componets/LoginForm';
import SignupForm from './componets/SignupForm';

function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">깃-포트폴리오</h1>
          <p className="text-gray-600 text-center">계정에 로그인하거나 새 계정을 만드세요</p>
        </div>

        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all ${
              activeTab === 'login'
                ? 'bg-white text-[#2563EB] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            로그인
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('signup')}
            className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all ${
              activeTab === 'signup'
                ? 'bg-white text-[#2563EB] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            회원가입
          </button>
        </div>

        <div className="mt-6">
          {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

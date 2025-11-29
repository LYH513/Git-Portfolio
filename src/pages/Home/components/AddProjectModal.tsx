interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportFromGitHub: () => void;
  onCreateManually: () => void;
}

export default function AddProjectModal({
  isOpen,
  onClose,
  onImportFromGitHub,
  onCreateManually,
}: AddProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6"
        onClick={e => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">프로젝트 추가</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 설명 */}
        <p className="text-gray-600 mb-6">프로젝트를 추가하는 방법을 선택하세요</p>

        {/* 옵션 버튼들 */}
        <div className="space-y-3">
          {/* GitHub에서 가져오기 */}
          <button
            type="button"
            onClick={onImportFromGitHub}
            className="w-full flex items-center p-4 rounded-lg bg-[#111827] text-white hover:bg-[#1f2937] transition-colors"
          >
            <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <div className="font-semibold">GitHub에서 가져오기</div>
              <div className="text-sm text-gray-300 mt-0.5">
                프로젝트 정보를 자동으로 가져옵니다
              </div>
            </div>
          </button>

          {/* 수동으로 생성하기 */}
          <button
            type="button"
            onClick={onCreateManually}
            className="w-full flex items-center p-4 rounded-lg bg-blue-50 border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-100 transition-colors"
          >
            <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <div className="font-semibold">수동으로 생성하기</div>
              <div className="text-sm text-blue-600 mt-0.5">
                프로젝트 정보를 직접 입력합니다
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}


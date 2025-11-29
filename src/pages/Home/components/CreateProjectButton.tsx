import { useState } from 'react';
import AddProjectModal from './AddProjectModal';

export default function CreateProjectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImportFromGitHub = () => {
    // TODO: GitHub 연동 기능 구현
    console.log('GitHub에서 가져오기');
    handleCloseModal();
  };

  const handleCreateManually = () => {
    // TODO: 수동 생성 기능 구현
    console.log('수동으로 생성하기');
    handleCloseModal();
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-end">
        <button
          type="button"
          onClick={handleOpenModal}
          className="px-6 py-3 bg-[#2563EB] text-white rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors shadow-sm"
        >
          프로젝트 생성
        </button>
      </div>
      <AddProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onImportFromGitHub={handleImportFromGitHub}
        onCreateManually={handleCreateManually}
      />
    </>
  );
}



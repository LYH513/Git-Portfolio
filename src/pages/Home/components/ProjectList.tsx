export default function ProjectList() {
  // TODO: 프로젝트 리스트 데이터를 받아서 렌더링
  // 현재는 outline만 표시
  const placeholderCount = 6; // 2줄 x 3개

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <div
            key={index}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[200px] flex items-center justify-center"
          >
            <span className="text-gray-400 text-sm">프로젝트 카드 영역</span>
          </div>
        ))}
      </div>
    </div>
  );
}



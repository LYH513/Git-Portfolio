// MSW 모드일 때는 빈 문자열로 설정하여 같은 origin에서 요청하도록 함
// 실제 서버를 사용할 때는 VITE_API_URL 환경 변수 설정
export const BASE_URL =
  import.meta.env.VITE_API_MODE === 'msw'
    ? ''
    : import.meta.env.VITE_API_URL ?? 'http://localhost:8080';


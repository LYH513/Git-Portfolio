export function useErrorHandler() {
  const handleError = (err: any, setError: (message: string) => void) => {
    if (err.response) {
      // 서버 응답이 있는 경우
      const errorData = err.response.data;
      const status = err.response.status;
      const message = errorData?.message || errorData?.error || `요청에 실패했습니다. (${status})`;
      setError(message);
      console.error('에러 응답:', {
        status,
        data: errorData,
        headers: err.response.headers,
        config: {
          url: err.config?.url,
          baseURL: err.config?.baseURL,
          method: err.config?.method,
          data: err.config?.data,
        },
      });
    } else if (err.request) {
      // 요청은 보냈지만 응답을 받지 못한 경우 (네트워크 오류, CORS 등)
      setError('서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요.');
      console.error('네트워크 에러:', err.request);
    } else {
      // 그 외의 오류
      setError(err.message || '요청에 실패했습니다.');
      console.error('에러:', err);
    }
  };

  return { handleError };
}


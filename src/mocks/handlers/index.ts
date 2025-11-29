import { http, HttpResponse } from 'msw';

export const handlers = [
  // 회원가입 - 모든 origin의 /auth/signup 요청을 가로챔
  http.post('*/auth/signup', async ({ request }) => {
    const body = await request.json() as { email: string; password: string };
    
    // 간단한 검증
    if (!body.email || !body.password) {
      return HttpResponse.json(
        { message: '이메일과 비밀번호를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 성공 응답
    return HttpResponse.json({
      userId: Math.floor(Math.random() * 1000),
      email: body.email,
      token: `mock-token-${Date.now()}`,
    });
  }),
  // 로그인 - 모든 origin의 /auth/login 요청을 가로챔
  http.post('*/auth/login', async ({ request }) => {
    const body = await request.json() as { email: string; password: string };
    
    // 간단한 검증
    if (!body.email || !body.password) {
      return HttpResponse.json(
        { message: '이메일과 비밀번호를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 성공 응답
    return HttpResponse.json({
      userId: Math.floor(Math.random() * 1000),
      email: body.email,
      token: `mock-token-${Date.now()}`,
    });
  }),
];


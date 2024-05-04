import { NextRequest, NextResponse } from 'next/server';
import { get } from './helpers/http-requests/fetch';
import { PROVIDER } from './config/userType';

export async function middleware(request) {
  const accessToken = request.cookies.get("access_token")?.value || '';

  // Login screen
  if (request.nextUrl.pathname.startsWith('/auth/login')) {
    let result = await get('/auth/get-me', accessToken);
    if (result.status == 200) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Register screen
  if (request.nextUrl.pathname.startsWith('/auth/register')) {
    let result = await get('/auth/get-me', accessToken);
    if (result.status == 200) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Mypage screen
  if (
    request.nextUrl.pathname.startsWith('/provider/mypage') ||
    request.nextUrl.pathname.startsWith('/finder/mypage')
  ) {
    let result = await get('/auth/get-me', accessToken);
    if (result.status == 401) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Hostel regist
  if (request.nextUrl.pathname.startsWith('/provider/hostel-regist')) {
    let result = await get('/auth/get-me', accessToken);
    console.log(result.data.user_type)
    if (result.data.user_type != PROVIDER) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Hostel manager
  if (request.nextUrl.pathname.startsWith('/provider/hostel-manager')) {
    let result = await get('/auth/get-me', accessToken);
    console.log(result.data.user_type)
    if (result.data.user_type != PROVIDER) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
}

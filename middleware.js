import { NextRequest, NextResponse } from 'next/server';
import { get } from './helpers/http-requests/fetch';
import { PROVIDER } from './config/userType';

export async function middleware(request) {
  const accessToken = request.cookies.get("access_token")?.value || '';
  const path = request.nextUrl.href.replace(process.env.FRONTEND_URL, '');

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
    if (result.status != 200) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    if (result.data.user_type != PROVIDER) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Hostel manager
  if (request.nextUrl.pathname.startsWith('/provider/hostel-manager')) {
    let result = await get('/auth/get-me', accessToken);
    if (result.data.user_type != PROVIDER) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Finder access provider page
  if (request.nextUrl.pathname.startsWith('/provider')) {
    let params = new URLSearchParams(request.nextUrl.search);
    let appId = params.get('app_id');
    if (appId != null) {
      let result = await get(`/public-provider/${appId}`, accessToken);
      let getMe = await get('/auth/get-me', accessToken);
      if (result.status != 200) {
        return NextResponse.redirect(new URL('/errors/404', request.url));
      } else if (getMe?.data?.user_type == PROVIDER) {
        return NextResponse.redirect(new URL('/errors/404', request.url));
      }
    }
  }

  // Admin screen
  if (path == '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }
}

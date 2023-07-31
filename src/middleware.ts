import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value;

  if (!currentUser) {
    // Redirect to login page if user is not authenticated
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('currentUser');
    return response;
  }

  // Allow request to proceed if user is authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ['/faq', ], //add protected links
};
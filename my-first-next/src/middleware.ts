import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const helloCookie = request.cookies.get("hello");

  console.log("미들웨어 안에 있습니다");

  if (
    helloCookie?.value === "world" &&
    request.nextUrl.pathname !== "my-profile"
  ) {
    return NextResponse.redirect("http://localhost:3000/my-profile");
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }

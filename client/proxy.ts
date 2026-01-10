import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authPaths = ["/login", "/register"];
const privatePaths = ["/me"];
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const sessionToken = request.cookies.get("sessionToken")?.value;
  //nếu truy cập trang private mà không có sessionToken thì redirect về login
  if (privatePaths.some((path) => pathname.startsWith(path))) {
    if (!sessionToken) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  //nếu truy cập trang auth mà đã có sessionToken thì redirect về /me
  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    const meUrl = new URL("/me", request.url);
    return NextResponse.redirect(meUrl);
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/login', '/register', '/me'],
};

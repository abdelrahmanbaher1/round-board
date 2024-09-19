import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { COOKIE_NAME } from "./core/lib/constants";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/dashboard") ||
    request.nextUrl.pathname.startsWith("/project") ||
    request.nextUrl.pathname.startsWith("/settings")
  ) {
    if (!request.cookies.has(COOKIE_NAME)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (request.cookies.has(COOKIE_NAME))
      return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

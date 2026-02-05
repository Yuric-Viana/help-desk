import { getToken } from "next-auth/jwt";
import { findMatchingRoute, routePermissions } from "./lib/routes";
import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const currentPath = request.nextUrl.pathname;

  const userRole = token?.role;

  const matchingRoute = findMatchingRoute(currentPath);

  if (!matchingRoute) {
    return NextResponse.next();
  }

  const allowedRoles =
    routePermissions[matchingRoute as keyof typeof routePermissions];

  if (allowedRoles.length === 0) {
    return NextResponse.next();
  }

  if (!token) {
    const url = new URL("/", request.url);
    url.searchParams.set("callbackUrl", currentPath);
    return NextResponse.redirect(url);
  }

  if (!allowedRoles.includes(userRole as string)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

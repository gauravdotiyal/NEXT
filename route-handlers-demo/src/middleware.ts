import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//     if(request.nextUrl.pathname === "/profile"){
//         return NextResponse.rewrite(new URL("/hello",request.url))
//     }
// }

// export const config = {
//   matcher: "/profile",
// };

//Headers middlewares: Can be used for debugging purposes
export function middleware(request:NextRequest){
  const response=NextResponse.next();
  const themePreference=request.cookies.get("theme");

  if(!themePreference)
  {
    response.cookies.set("theme","dark");
  }
  
  response.headers.set("custom-header","custom-value");
  return response;
}

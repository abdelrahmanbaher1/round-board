import { COOKIE_NAME } from "@/core/lib/constants";
import { signin } from "@/core/lib/authTools";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, password } = data;

    const result = await signin({ email, password });

    if (result instanceof Error) {
      return NextResponse.json(
        { error: result.message || "Invalid credentials" },
        { status: 400 }
      );
    }

    cookies().set(COOKIE_NAME, result.token);
    cookies().set("userId", result.user.id);

    return NextResponse.json({
      data: {
        user: result.user,
        token: result.token,
      },
    });
  } catch (error: any) {
    console.error("Error signing in:", error.message);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 400 }
    );
  }
}

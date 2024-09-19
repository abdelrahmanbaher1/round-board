import { COOKIE_NAME } from "@/core/lib/constants";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({ success: true });
    response.cookies.delete(COOKIE_NAME);
    response.cookies.delete("userId");

    return response;
  } catch (error: any) {
    console.error("Error signing out:", error.message);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 400 }
    );
  }
}

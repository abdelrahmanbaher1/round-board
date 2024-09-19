import { db } from "@/core/db/db";
import { users } from "@/db/schema/users";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

const getUserByEmail = async (email: string) => {
  try {
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email.toLowerCase()));

    if (existingUser.length > 0) {
      return {
        data: existingUser,
        message: "User Already Exists",
      };
    } else {
      return {
        error: "User does not exist.",
        status: 404,
      };
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return { error: "Error occurred while fetching the user.", status: 500 };
  }
};

export async function POST(request: Request, context: any) {
  const data = request.json();
  const { params } = context;

  return NextResponse.json({
    data,
    params,
  });
}

export async function GET(request: Request, context: any) {
  const data = request.json();
  const { params } = context;

  return NextResponse.json({
    data,
    params,
  });
}

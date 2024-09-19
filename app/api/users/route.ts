import { db } from "@/core/db/db";
import { users } from "@/core/db/schema";
import { COOKIE_NAME } from "@/core/lib/constants";
import { getUserFromToken } from "@/core/lib/authTools";
import { sanitizeText } from "@/core/lib/helper";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const getUserByEmail = async (email: string) => {
  try {
    console.log(email.toLowerCase());

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email.toLowerCase()));

    return {
      data: existingUser,
      status: 200,
      userExists: existingUser.length > 0,
    };
  } catch (error) {
    return { error: "Error occurred while fetching the user.", status: 500 };
  }
};

export async function POST(request: Request, context: any) {
  try {
    const data = await request.json();
    const { email } = data;

    const sanitizedEmail = email && sanitizeText(email);

    const result = await getUserByEmail(sanitizedEmail);

    if (result) {
      return NextResponse.json({
        data: result.data,
        userExists: result.userExists,
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET(request: Request, context: any) {
  try {
    const token = cookies().get(COOKIE_NAME);

    if (!token) redirect("/login");

    const user = await getUserFromToken(token);
    if (!user) redirect("/login");

    if (user) {
      return NextResponse.json({
        data: user,
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

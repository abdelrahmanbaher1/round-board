import { createTokenForUser, hashPW } from "@/core/lib/authTools";
import { NextResponse } from "next/server";
import { db } from "@/core/db/db";
import { CreateUserDto } from "@/core/services/models/CreateUserDto";
import { users } from "@/core/db/schema";

const createUser = async (user: CreateUserDto) => {
  const { password, ...rest } = user;
  const hashedPW = await hashPW(password);

  try {
    const newUser = await db
      .insert(users)
      .values({
        ...rest,
        password: hashedPW,
      })
      .returning({
        id: users.id,
      });

    const token = createTokenForUser(newUser[0].id);

    return {
      data: newUser,
      token,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      error: "Error occurred while creating the user.",
      status: 500,
    };
  }
};

export async function POST(request: Request, context: any) {
  try {
    const data = await request.json();
    const { user } = data;

    // i added this if you create it from postman
    if (!user) {
      return NextResponse.json(
        { error: "User data is required." },
        { status: 400 }
      );
    }
    const result = await createUser(user);
    console.log("Create User result:", result);

    if (result.data) {
      return NextResponse.json({
        data: result.data,
        token: result.token,
      });
    } else {
      return NextResponse.json(
        { error: result.error },
        { status: result.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

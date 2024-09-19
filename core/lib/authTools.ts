import "server-only";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "@/core/db/db";
import { eq } from "drizzle-orm";
import { users } from "@/core/db/schema";
import { CreateUserDto } from "@/core/services/models/CreateUserDto";

export const hashPW = (password: string) => {
  return bcrypt.hash(password, 10);
};

export const comparePW = (password: string, hashedPW: string) => {
  return bcrypt.compare(password, hashedPW);
};

export const createTokenForUser = (userId: string) => {
  const token = jwt.sign({ id: userId }, process.env.SECRET);
  return token;
};

export const getUserFromToken = async (token: {
  name: string;
  value: string;
}) => {
  const payload = jwt.verify(token.value, process.env.SECRET) as { id: string };

  const user = await db.query.users.findFirst({
    where: eq(users.id, payload.id),
    columns: {
      id: true,
      email: true,
      createdAt: true,
      organizationId: true,
    },
  });

  return user;
};

export const signin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const match = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!match) throw new Error("invalid user");

    const correctPW = await comparePW(password, match.password);

    if (!correctPW) {
      throw new Error("invalid user");
    }

    const token = createTokenForUser(match.id);
    const { password: pw, ...user } = match;

    return { user, token };
  } catch (error) {
    console.error("Error in signin function:", error);
    throw error;
  }
};
export const signup = async ({ userInfo }: { userInfo: CreateUserDto }) => {
  const { password } = userInfo;
  const hashedPW = await hashPW(password);

  const rows = await db
    .insert(users)
    .values({ password: hashedPW, ...userInfo })
    .returning({
      id: users.id,
      email: users.email,
      createdAt: users.createdAt,
    });

  const user = rows[0];
  const token = createTokenForUser(user.id);

  return { user, token };
};

import { getData } from "@/core/server/data";
import { CreateUserDto } from "./models/CreateUserDto";

export class AuthService {
  constructor() {}

  signUp = async (user: CreateUserDto) =>
    await getData({
      url: "/api/auth/signup/",
      method: "POST",
      body: { user },
      errorMessage: "Failed to create user",
    });

  signIn = async (email: string, password: string) =>
    await getData({
      url: "/api/auth/signin",
      method: "POST",
      body: { email, password },
      errorMessage: "An error occurred during sign in",
    });

  signOut = async () =>
    await getData({
      url: "/api/auth/signout",
      method: "POST",
      errorMessage: "failed to log you out",
    });
}

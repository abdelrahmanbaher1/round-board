import { getData } from "@/core/server/data";
import { GetCurrentUserResponse, TError } from "@/core/server/definations";

export class UserService {
  private readonly baseURL: string = "/api/users";

  constructor() {}

  fetchUserByEmail = async (email: string) =>
    await getData({
      url: this.baseURL,
      method: "POST",
      errorMessage: "Error fetching user by email",
    });

  getCurrentUser = async (): Promise<GetCurrentUserResponse | TError> =>
    await getData<GetCurrentUserResponse>({
      url: this.baseURL,
      method: "GET",
      errorMessage: "Failed to get User",
    });
}

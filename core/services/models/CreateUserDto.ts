export type CreateUserDto = {
  fullName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  status?: "ACTIVE" | "INACTIVE";
  organizationId: string;
};

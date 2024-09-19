import { getData } from "@/core/server/data";
import { CreateOrganizationDto } from "./models/CreateOrganizationDto";

export class OrganizationService {
  constructor() {}

  private readonly baseURL: string = "/api/organizations";

  getOrganization = async (id: string) =>
    await getData<any>({
      url: `${this.baseURL}/${id}`,
      method: "GET",
      errorMessage: "Could not get the organization !",
    });

  createOrganization = async (organization: CreateOrganizationDto) => {
    const response = await fetch(`/api/organizations/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ organization }),
    });

    if (!response.ok) {
      throw new Error("Failed to create organization");
    }

    return response.json();
  };
}

import { CreateTeamDto } from "./models/CreateTeamDto";
import { GetTeamsDataResponse } from "./models/GetTeamsDataResponse";

export class TeamService {
  private readonly baseURL: string = "/api/teams/";

  constructor() {}

  getTeam = async (id: string) => {
    try {
      const response = await fetch(`/api/teams/${id}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch team with ID ${id}: ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching team:", error);
      throw new Error("Error occurred while fetching the team.");
    }
  };

  createTeam = async (team: CreateTeamDto) => {
    try {
      const response = await fetch(`/api/teams/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ team }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create team: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating team:", error);
      throw new Error("Error occurred while creating the team.");
    }
  };

  getTeamsForOrganization = async (organizationId: string) => {
    try {
      const response = await fetch(
        `/api/teams?organizationId=${organizationId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to get teams for organization: ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Error getting teams:", error);
      throw new Error("Error occurred while getting teams.");
    }
  };
}

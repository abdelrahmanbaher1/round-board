import { createProjectDto } from "./createProjectDto";

export class ProjectService {
  constructor() {}

  getOrganization = async (id: string) => {
    try {
      const response = await fetch(`/api/organizations/${id}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch organization with ID ${id}: ${response.statusText}`
        );
      }

      return response.json();
    } catch (error) {
      console.error("Error fetching organization:", error);
      throw new Error("Error occurred while fetching the organization.");
    }
  };

  createProject = async (project: createProjectDto) => {
    try {
      const response = await fetch(`/api/projects/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ project }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create project: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error("Error creating project:", error);
      throw new Error("Error occurred while creating the project.");
    }
  };
}

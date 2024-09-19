import { db } from "@/core/db/db";
import { organizations, projects } from "@/core/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request, context: any) {
  try {
    const { id } = context.params;

    const result = await db
      .select({
        organization: organizations,
        project: projects,
      })
      .from(organizations)
      .innerJoin(projects, eq(organizations.id, projects.organizationId))
      .where(eq(organizations.id, id));

    const data = result.reduce((acc: any[], row) => {
      const orgId = row.organization.id;

      let existingOrg = acc.find((org) => org.id === orgId);

      if (existingOrg) {
        if (row.project && row.project.id) {
          existingOrg.projects.push(row.project);
        }
      } else {
        acc.push({
          ...row.organization,
          projects: row.project && row.project.id ? [row.project] : [],
        });
      }

      return acc;
    }, []);

    return new Response(JSON.stringify({ data }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error handling GET request:", error);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
    });
  }
}

import { db } from "@/core/db/db";
import { projects, teams } from "@/core/db/schema";
import { generateUniqueId } from "@/core/lib/helper";
import { CreateTeamDto } from "@/core/services/models/CreateTeamDto";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

const createTeam = async (team: CreateTeamDto) => {
  try {
    const newTeam = await db.insert(teams).values(team).returning({
      id: teams.id,
    });

    return {
      data: newTeam,
    };
  } catch (error) {
    console.error("Error creating team:", error);
    return {
      error: "Error occurred while creating the team.",
      status: 500,
    };
  }
};
const getTeams = async (organizationId: string) => {
  try {
    const Teams = await db
      .select()
      .from(teams)
      .leftJoin(projects, eq(projects.teamId, teams.id))
      .where(eq(teams.organizationId, organizationId));

    return {
      data: Teams,
    };
  } catch (error) {
    console.error("Error creating team:", error);
    return {
      error: "Error occurred while creating the team.",
      status: 500,
    };
  }
};
/*
{"id":"23258220-9dee-4690-92f3-b23dda2f9584","title":"ticket1","
description":"asdafd","status":"IN_PROGRESS","priority":"URGENT",
"projectId":"1a5cb810-0bd3-4a69-9d02-797c05a28db1",
"userId":"ec762f31-792d-4492-988d-30ba455e8d47",
"fullName":"admin"}


*/

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Received data:", data);

    const { team } = data;
    console.log("Team data:", team);

    if (!team) {
      return NextResponse.json(
        { error: "Team data is required." },
        { status: 400 }
      );
    }

    const result = await createTeam(team);
    console.log("Create team result:", result);

    if (result && result.data) {
      return NextResponse.json({
        data: result.data,
      });
    } else {
      return NextResponse.json(
        { error: result.error },
        { status: result.status }
      );
    }
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const organizationId = searchParams.get("organizationId");

    if (!organizationId) {
      return NextResponse.json(
        { error: "Organization Id is required." },
        { status: 400 }
      );
    }

    const result = await getTeams(organizationId);
    console.log("Get teams result:", result);

    if (result && result.data) {
      return NextResponse.json({
        data: result.data,
      });
    } else {
      return NextResponse.json(
        { error: result.error },
        { status: result.status }
      );
    }
  } catch (error) {
    console.error("Error handling GET request:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

import { db } from "@/core/db/db";
import { organizations } from "@/core/db/schema";
import { CreateOrganizationDto } from "@/core/services/models/CreateOrganizationDto";
import { LibsqlError } from "@libsql/client";
import { NextResponse } from "next/server";

const createOrganization = async (organization: CreateOrganizationDto) => {
  try {
    const newOrganization = await db
      .insert(organizations)
      .values({
        ...organization,
      })
      .returning({
        id: organizations.id,
      });

    return {
      data: { organizationId: newOrganization[0].id },
    };
  } catch (error) {
    console.error("Error creating organization:", error);
    return {
      error:
        error instanceof LibsqlError
          ? error.code
          : "Failed To Create Organization",
      status: 500,
    };
  }
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { organization } = data;

    // i added this if you create it from postman
    if (!organization) {
      return NextResponse.json(
        { error: "Organization data is required." },
        { status: 400 }
      );
    }

    const result = await createOrganization(organization);
    console.log("Create organization result:", result);

    if (result.data) {
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
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

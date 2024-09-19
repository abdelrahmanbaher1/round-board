import { db } from "@/core/db/db";
import { projects } from "@/core/db/schema";
import { genRanHex } from "@/core/lib/helper";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log("Received data:", data);

    const { project } = data;

    if (!project) {
      return NextResponse.json(
        { error: "Project data is required." },
        { status: 400 }
      );
    }

    const result = await db
      .insert(projects)
      .values({
        ...project,
        color: `#${genRanHex(6)}`,
      })
      .returning();

    console.log("Create project result:", result);

    if (result) {
      return NextResponse.json({
        result,
      });
    }
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

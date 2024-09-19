import { db } from "@/core/db/db";
import { projects } from "@/db/schema/projects";
import { NextResponse } from "next/server";

export async function POST(request: Request, context: any) {
  const data = request.json();
  const { id, key, name, is_favorite } = data;
  const { params } = context;

  const newProject = await db
    .insert(projects)
    .values({ id, key, name, isFavorite: is_favorite })
    .returning({
      id,
    });
  return NextResponse.json({
    newProject,
    params,
  });
}

import { db } from "@/core/db/db";
import { projects, tickets, users } from "@/core/db/schema";
import { CreateTicketDto } from "@/core/services/models/CreateTicketDto";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data: { ticket: CreateTicketDto } = await request.json();

    const { ticket } = data;

    if (!ticket) {
      return NextResponse.json(
        { error: "Ticket data is required." },
        { status: 400 }
      );
    }

    const result = await db.insert(tickets).values(ticket).returning({
      id: tickets.id,
    });

    console.log("Create ticket result:", result);

    return NextResponse.json({
      data: result,
    });
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
    const projectId = searchParams.get("projectId");
    const userId = searchParams.get("userId");
    const page = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : null;

    if (!projectId || !userId) {
      return NextResponse.json(
        { error: "Project and user ID are required." },
        { status: 400 }
      );
    }

    let query = db
      .select({
        ...tickets,
        fullName: users.fullName,
      })
      .from(tickets)
      .innerJoin(projects, eq(tickets.projectId, projects.id))
      .innerJoin(users, eq(tickets.userId, users.id))
      .where(eq(tickets.projectId, projectId))
      .where(eq(tickets.userId, userId));

    if (page && page > 0) {
      const pageSize = 10;
      const offset = (page - 1) * pageSize;
      query = query.limit(pageSize).offset(offset);
    }

    const result = await query;

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error handling GET request:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

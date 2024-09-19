import { db } from "@/core/db/db";
import { tickets } from "@/core/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request, context: any) {
  try {
    const { id } = context.params;

    return new Response(
      JSON.stringify({
        result: await db.select().from(tickets).where(eq(tickets.id, id)),
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error handling GET request:", error);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
    });
  }
}
export async function DELETE(request: Request, context: any) {
  try {
    const { id } = context.params;

    const result = await db.delete(tickets).where(eq(tickets.id, id));

    return new Response(
      JSON.stringify({ message: "Ticket deleted successfully." }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error handling DELETE request:", error);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
    });
  }
}

export async function PUT(request: Request, context: any) {
  try {
    const { id } = context.params;
    const { newPriority } = await request.json();

    if (!newPriority) {
      return new Response(
        JSON.stringify({ error: "New priority is required." }),
        { status: 400 }
      );
    }

    const result = await db
      .update(tickets)
      .set({ priority: newPriority })
      .where(eq(tickets.id, id))
      .returning();

    return new Response(
      JSON.stringify({
        result: result,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error handling PUT request:", error);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
    });
  }
}

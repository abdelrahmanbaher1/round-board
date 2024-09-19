import { db } from "./core/db/db";
import { tickets } from "./core/db/schema";

const STATUS = ["OPEN", "IN_PROGRESS", "CLOSED", "READY_FOR_REVIEW", "ERROR"];
const PRIORITY = ["URGENT", "HIGH", "MEDIUM", "LOW"];

const seedDatabase = async () => {
  try {
    const ticketData = Array.from({ length: 300 }, (_, index) => ({
      title: `Ticket ${50 + index + 1}`,
      description: `Description for ticket ${index + 1}`,
      status: STATUS[index % 5] as
        | "OPEN"
        | "IN_PROGRESS"
        | "CLOSED"
        | "READY_FOR_REVIEW"
        | "ERROR",
      priority: PRIORITY[index % 4] as "URGENT" | "HIGH" | "MEDIUM" | "LOW",
      projectId: "1a5cb810-0bd3-4a69-9d02-797c05a28db1",
      userId: "ec762f31-792d-4492-988d-30ba455e8d47",
    }));

    console.log(ticketData);

    // Insert the ticket data into the database
    const result = await db.insert(tickets).values(ticketData).returning();

    console.log("Tickets added:", result.length);
  } catch (error) {
    console.error("Failed to seed database:", error);
  }
};

seedDatabase();

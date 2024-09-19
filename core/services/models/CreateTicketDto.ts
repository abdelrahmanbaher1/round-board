export type CreateTicketDto = {
  id: string;
  title: string;
  description: string;
  status: "OPEN" | "CLOSED" | "IN_PROGRESS" | "READY_FOR_REVIEW" | "ERROR";
  priority: "URGENT" | "HIGH" | "MEDIUM" | "LOW";
  projectId: string;
  userId: string;
};

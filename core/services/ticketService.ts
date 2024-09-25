import { getData } from "@/core/server/data";

export class TicketService {
  constructor() {}
  private readonly baseURL: string = "/api/tickets";

  getTicketsForProject = async (
    projectId: string,
    userId: string,
    page?: number,
    isPaginated?: boolean
  ) => {
    const url =
      `${this.baseURL}/?projectId=${projectId}&userId=${userId}` +
      (isPaginated ? `&page=${page}` : "");

    return await getData({
      url: url,
      method: "GET",
      errorMessage: "Could not get tickets for project",
    });
  };

  getTicketById = async (ticketId: string, signal?: AbortSignal) =>
    await getData({
      url: `${this.baseURL}/${ticketId}`,
      method: "GET",
      errorMessage: "Failed to get Ticket Data",
      signal,
    });

  deleteTicketById = async (ticketId: string) =>
    await getData({
      url: `${this.baseURL}/${ticketId}`,
      method: "DELETE",
      errorMessage: "Failed to delete Ticket Data",
    });

  updateTicketPriority = async (ticketId: string, newPriority: string) =>
    await getData({
      url: `${this.baseURL}/${ticketId}`,
      method: "PATCH",
      errorMessage: "cannot update this ticket ",
      body: { newPriority },
    });
}

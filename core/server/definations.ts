export type TError = {
  status: number | null;
  error: string;
};

export type TTeam = {
  description: string;
  id: string;
  name: string;
  organizationId: string;
};

export type TProject = {
  description: string | null;
  id: string;
  isFavorite: boolean;
  name: string;
  teamId: string;
  color: string;
  organizationId: string;
};

export type TOrganization = {
  id: string;
  displayName: string;
  key: string;
};

export type TTicketStatus =
  | "OPEN"
  | "IN_PROGRESS"
  | "CLOSED"
  | "READY_FOR_REVIEW"
  | "ERROR";

export type TTicketPriority = "URGENT" | "HIGH" | "MEDIUM" | "LOW";

export type TTicket = {
  id: string;
  title: string;
  description: string;
  status: TTicketStatus;
  priority: TTicketPriority;
  userId: string;
  projectId: string;
};

export type GetCurrentUserResponse = {
  data: {
    createdAt: string;
    email: string;
    id: string;
    organizationId: string;
  };
};

export type GetOrganizationDataResponse = {
  data: {
    id: string;
    displayName: string;
    key: string;
    projects: TProject[];
  };
};

import { OrganizationService } from "@/core/services/organizationService";
import { UserService } from "../services/usersService";
import { AuthService } from "@/core/services/authService";
import { ProjectService } from "@/core/services/projectService";
import { TeamService } from "@/core/services/teamService";
import { TicketService } from "@/core/services/ticketService";

export class AppClient {
  public readonly user: UserService;
  public readonly organization: OrganizationService;
  public readonly auth: AuthService;
  public readonly project: ProjectService;
  public readonly team: TeamService;
  public readonly ticket: TicketService;

  constructor() {
    this.user = new UserService();
    this.organization = new OrganizationService();
    this.auth = new AuthService();
    this.project = new ProjectService();
    this.team = new TeamService();
    this.ticket = new TicketService();
  }
}

import { TProject, TTeam } from "@/core/server/definations";

export type GetTeamsDataResponse = {
  teams: TTeam[];
  projects: TProject[];
};

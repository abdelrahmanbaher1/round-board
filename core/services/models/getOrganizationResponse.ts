type TOrganization = {
  id: string;
  displayName: string;
  key: string;
  avatar: string | null;
  projects: [];
  users: [];
};
export type getOrganizationResponse = {
  organizations: TOrganization[];
  projects: [];
  users: [];
};

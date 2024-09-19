import { AppClient } from "./AppClient";

let api: AppClient;

export const initiateApiInstance = (): void => {
  api = new AppClient();
};
export const getApiInstance = (): AppClient => {
  if (!api) {
    initiateApiInstance();
  }
  return api;
};

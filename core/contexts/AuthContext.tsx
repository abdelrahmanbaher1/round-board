"use client";

import { createOrganizationDto } from "@/core/services/models/CreateOrganizationDto";
import { createProjectDto } from "@/core/services/createProjectDto";
import { createTeamDto } from "@/core/services/models/CreateTeamDto";
import { CreateUserDto } from "@/core/services/models/CreateUserDto";
import React, { useCallback, useReducer } from "react";

type TProps = {
  children: React.ReactNode;
};

type TContext = {
  isLoggedIn: boolean;

  organizationData: createOrganizationDto;
  setOrganizationData: (data: createOrganizationDto) => void;

  userInfo: CreateUserDto;
  setUserInfo: (data: CreateUserDto) => void;
};

const AuthContext = React.createContext<TContext | null>(null);

type TAction =
  | { type: "SET_ORGANIZATION_DATA"; payload: createOrganizationDto }
  | { type: "SET_USER_INFO"; payload: CreateUserDto }
  | { type: "SET_TEAM_DATA"; payload: createTeamDto }
  | { type: "SET_PROJECT_DATA"; payload: createProjectDto };

type TState = {
  isLoggedIn: boolean;
  organizationData: createOrganizationDto;
  userInfo: CreateUserDto;
};

const initialState: TState = {
  isLoggedIn: false,
  organizationData: {} as createOrganizationDto,
  userInfo: {} as CreateUserDto,
};

const appReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "SET_ORGANIZATION_DATA":
      return {
        ...state,
        organizationData: action.payload,
      };
    case "SET_USER_INFO":
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: TProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setOrganizationData = useCallback(
    (data: createOrganizationDto) => {
      dispatch({ type: "SET_ORGANIZATION_DATA", payload: data });
    },
    [dispatch]
  );

  const setUserInfo = useCallback(
    (data: CreateUserDto) => {
      dispatch({ type: "SET_USER_INFO", payload: data });
    },
    [dispatch]
  );

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        organizationData: state.organizationData,
        setOrganizationData,
        userInfo: state.userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () =>
  React.useContext(AuthContext as React.Context<TContext>);

export default useAuthContext;

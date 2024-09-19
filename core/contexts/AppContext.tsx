"use client";

import React, { useCallback, useReducer } from "react";

type TProps = {
  children: React.ReactNode;
};

type TContext = {
  isMobile: boolean;
  isDrawerOpen: boolean;
  isLoggedIn: boolean;
  setIsDrawerOpen: (state: boolean) => void;
  organizationId: string;
  setOrganizationId: (id: string) => void; // Correct type for setting organizationId
};

const AppContext = React.createContext<TContext | null>(null);

type TAction =
  | { type: "TOGGLE_DRAWER" }
  | { type: "SET_ORGANIZATION"; payload: string };

type TState = {
  drawerState: boolean;
  isLoggedIn: boolean;
  organizationId: string;
};

const initialState: TState = {
  drawerState: false,
  isLoggedIn: false,
  organizationId: "",
};

const appReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return {
        ...state,
        drawerState: !state.drawerState,
      };
    case "SET_ORGANIZATION":
      return {
        ...state,
        organizationId: action.payload, // Update organizationId with payload
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }: TProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const { innerWidth: width } = global;

  const toggleDrawer = useCallback(() => {
    dispatch({ type: "TOGGLE_DRAWER" });
  }, [dispatch]);

  const setOrganizationId = useCallback(
    (id: string) => {
      dispatch({ type: "SET_ORGANIZATION", payload: id }); // Pass the organizationId as payload
    },
    [dispatch]
  );

  return (
    <AppContext.Provider
      value={{
        isDrawerOpen: state.drawerState,
        setIsDrawerOpen: toggleDrawer,
        isMobile: width < 800,
        isLoggedIn: state.isLoggedIn,
        organizationId: state.organizationId,
        setOrganizationId, // Expose the setOrganizationId function
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () =>
  React.useContext(AppContext as React.Context<TContext>);

export default useAppContext;

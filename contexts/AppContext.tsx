"use client";

import React, { useCallback, useEffect, useMemo, useReducer } from "react";

type TProps = {
  children: React.ReactNode;
};

type TContext = {
  isMobile: boolean;
  isDrawerOpen: boolean;
  isLoggedIn: boolean;
  setIsDrawerOpen: (state: boolean) => void;
};

const AppContext = React.createContext<TContext | null>(null);

type TAction = { type: "TOGGLE_DRAWER" };

type TState = {
  drawerState: boolean;
  isLoggedIn: boolean;
};

const initialState: TState = {
  drawerState: false,
  isLoggedIn: false,
};

const drawerReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return {
        ...state,
        drawerState: !state.drawerState,
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }: TProps) => {
  const [state, dispatch] = useReducer(drawerReducer, initialState);

  const { innerWidth: width } = global;

  const toggleDrawer = useCallback(() => {
    dispatch({ type: "TOGGLE_DRAWER" });
  }, [dispatch]);

  return (
    <AppContext.Provider
      value={{
        isDrawerOpen: state.drawerState,
        setIsDrawerOpen: toggleDrawer,
        isMobile: width < 800,
        isLoggedIn: false,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () =>
  React.useContext(AppContext as React.Context<TContext>);

export default useAppContext;

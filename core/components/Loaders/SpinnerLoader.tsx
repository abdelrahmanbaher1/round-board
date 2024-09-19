import { CircularProgress } from "@mui/material";
import React from "react";

type TProps = {
  isLoading: boolean;
  title?: string;
};

const SpinnerLoader = ({ isLoading, title }: TProps) =>
  isLoading ? <CircularProgress /> : <>{title ? title : ""}</>;

export default SpinnerLoader;

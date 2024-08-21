import React from "react";
import {
  Button,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { MEMBERS } from "@/tmpData";
import MemberInfo from "./MemberInfo";
import RetroSpectives from "./modules/RetroSpectives";
import { TTab } from "@/app/[...slug]/page";
import Development from "./modules/Development";

type TProps = {
  module: TTab;
};
interface Column {
  id: "iteration" | "status" | "start date" | "end date" | "team members";
  label: string;
  minWidth?: number;
  align?: "right";
}
const columns: readonly Column[] = [
  { id: "iteration", label: "ITERATION" },
  { id: "status", label: "STATUS" },
  {
    id: "start date",
    label: "START DATE",
  },
  {
    id: "end date",
    label: "END DATE",
  },
  {
    id: "team members",
    label: "TEAM MEMBERS",
  },
];
const ModulesRenderer = ({ module }: TProps) => {
  switch (module) {
    case "retrospectives":
      return <RetroSpectives />;
    case "development":
      return <Development />;
    default:
      return <div className="text-black">Module Not Found</div>;
  }
};

export default ModulesRenderer;

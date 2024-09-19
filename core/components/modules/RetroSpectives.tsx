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
import { MEMBERS, RETROSPECTIVES } from "@/tmpData";
import MemberInfo from "../MemberInfo";
import RoundInfo from "../RoundInfo";

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
type Props = {};

const RetroSpectives = (props: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Grid item xs={10}>
      <Paper
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{
            borderCollapse: "separate", // Ensure no borders between cells
            borderSpacing: 0, // Prevent spacing between cells
            "& th, & td": {
              borderBottom: "none", // Remove borders from table cells
            },
            "& th": {
              backgroundColor: "transparent", // Transparent header background
            },
          }}
        >
          <TableHead
            className="flex text-green-400"
            sx={{ display: "flex", flex: 1 }}
          >
            <TableRow sx={{ display: "flex", flex: 1 }}>
              {columns.map((column) => (
                <TableCell key={column.id} sx={{ color: "#31394E80", flex: 1 }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {RETROSPECTIVES.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((round) => (
              <TableRow key={round.id}>
                <TableCell colSpan={columns.length} sx={{ padding: 0 }}>
                  <RoundInfo round={round} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={RETROSPECTIVES.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Grid>
  );
};

export default RetroSpectives;

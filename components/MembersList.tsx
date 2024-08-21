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
import React from "react";
import { MEMBERS } from "@/tmpData";
import MemberInfo from "./MemberInfo";

type Props = {};
interface Column {
  id: "name" | "email" | "status";
  label: string;
  minWidth?: number;
  align?: "right";
}
const columns: readonly Column[] = [
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  {
    id: "status",
    label: "Status",
  },
];

const MembersList = (props: Props) => {
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Users On Plan</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            backgroundColor: "transparent", // Transparent background
            boxShadow: "none", // Remove Paper shadow
          }}
        >
          <TableContainer sx={{ maxHeight: 440 }}>
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
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                    //   align={column.align}
                      //   style={{ minWidth: column.minWidth }}
                      sx={{ color: "#31394E80" }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {MEMBERS.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                ).map((member) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={member.email}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)", // Slight hover effect
                      },
                    }}
                  >
                    <TableCell colSpan={columns.length} sx={{ padding: 0 }}>
                      <MemberInfo member={member} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={MEMBERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MembersList;

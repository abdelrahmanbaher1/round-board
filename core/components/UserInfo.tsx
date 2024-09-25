import React from "react";
import {
  Grid,
  Typography,
  Avatar,
  TextField,
  Button,
  Skeleton,
  Box,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/core/lib/constants";
import { getApiInstance } from "@/core/server/api";
import TextInput from "./TextInput";

type Props = {};

const UserInfo = (props: Props) => {
  const { data, isLoading, isFetched } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_USER_BY_EMAIL],
    queryFn: () => getApiInstance().user.getCurrentUser(),
  });

  if (isLoading)
    return (
      <Box sx={{ paddingTop: "50px" }}>
        <Skeleton
          variant="rectangular"
          width={1110}
          height={118}
          className="mb-5"
        />

        {[...Array(2)].map((_, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              marginBottom: 2,
            }}
          >
            {[...Array(2)].map((_, index) => (
              <Box key={index} sx={{ width: 210 }}>
                <Skeleton variant="rectangular" width={210} height={118} />
              </Box>
            ))}
          </Box>
        ))}

        <Skeleton
          variant="rectangular"
          width={1110}
          height={118}
          className="mb-5"
        />
      </Box>
    );

  const { email } = data.data;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Info</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextInput
                id="full-name"
                name="fullName"
                type="text"
                placeholder=""
                value={isFetched && email.split("@")[0]}
                fullWidth
                disabled
                label="Full Name"
                onChange={() => console.log("hello")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                id="email"
                name="fullName"
                type="text"
                placeholder=""
                value={isFetched && email}
                fullWidth
                disabled
                label="Email"
                onChange={() => console.log("hello")}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" disabled>
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default UserInfo;

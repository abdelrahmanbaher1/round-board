import React from "react";
import { Grid, Typography, Avatar, TextField, Button } from "@mui/material";

type Props = {};

const UserInfo = (props: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Info</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Avatar</Typography>
              <Avatar
                alt="Alt Avatar"
                src="https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <input type="file" name="file" id="avatar-upload" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                id="username"
                name="nickName"
                value="abdelrahmanbaher"
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                id="full-name"
                name="fullName"
                value="Abdelrahman Baher"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                id="email"
                name="email"
                value="abdelrahmanbaher2@gmail.com"
                fullWidth
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

import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

export default function LogOutButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Grid container justifyContent="flex-end">
        <Button
          variant="outlined"
          onClick={() => {
            localStorage.removeItem("token");
          }}
        >
          logOut
        </Button>
      </Grid>
    </Stack>
  );
}

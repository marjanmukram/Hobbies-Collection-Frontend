import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import { useHistory } from "react-router-dom";

export default function LogOutButton() {
  const history = useHistory();
  return (
    <Stack direction="row" spacing={2}>
      <Grid container justifyContent="flex-end">
        <Button
          variant="outlined"
          onClick={() => {
            localStorage.removeItem("token");
            history.push("/");
          }}
        >
          logOut
        </Button>
      </Grid>
    </Stack>
  );
}

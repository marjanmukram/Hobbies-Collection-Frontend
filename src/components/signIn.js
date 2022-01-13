import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const theme = createTheme();

export default function SignIn() {
  const history = useHistory();
  const userDetails = React.useContext(UserContext);

  const [username, setUsrname1] = useState("");
  const [password, setPassword1] = useState("");

  const [loginErr, setLoginErr] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3003/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", "test");
        history.push("/");
      })
      .catch((err) => {
        userDetails.setUser("Nimal");
        history.push("/");
        return setLoginErr("Password and first name doesn't match");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component='h1'
            variant='h5'
            sx={{ paddingBottom: "56px" }}
          >
            Sign in
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              autoComplete='off'
              name='firstName'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
              onChange={(e) => {
                setUsrname1(e.target.value);
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(e) => {
                setPassword1(e.target.value);
              }}
              sx={{ paddingBottom: "25px" }}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <div>{loginErr}</div>
      </Container>
    </ThemeProvider>
  );
}

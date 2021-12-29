import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
  const history = useHistory();

  const [username, setUsrname1] = useState("");
  const [password, setPassword1] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3003/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", "test");
        history.push("/");
      })
      .catch((err) => {
        localStorage.setItem("token", "test");
        history.push("/");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box mt={8} d={"flex"} flexDirection='column' alignItems='center'>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              autoComplete='given-name'
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
      </Container>
    </ThemeProvider>
  );
}

import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";

const Login = () => {
  const history = useHistory();
  const [usernameReg, setUsrnameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");

  const [username, setUsrname1] = useState("");
  const [password, setPassword1] = useState("");

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3003/register", {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", "something");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = () => {
    Axios.post("http://localhost:3003/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", "usernameReg");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>LEASURE HOBBIES</h1>
      <div className="login">
        <form onSubmit={register}>
          <h1>Register</h1>

          <label>Username</label>
          <input
            type="text"
            required
            onChange={(e) => {
              setUsrnameReg(e.target.value);
            }}
          />
          <label>E-mail</label>
          <input
            type="email"
            required
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="text"
            required
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="login">
        <h1>Login</h1>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsrname1(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword1(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;

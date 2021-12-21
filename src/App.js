import Axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [usernameReg, setUsrnameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3003/register", {
      username: usernameReg,
      password: passwordReg,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="box">
        <h1>Register</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsrnameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </div>
      <div className="box">
        <h1>Login</h1>
        <label>Username</label>
        <input type="text" placeholder="Username" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="box">
        <h1>Register</h1>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
        <button>Register</button>
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

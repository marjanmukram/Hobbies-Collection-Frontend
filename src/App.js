import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Login from "./login";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState('Default user');
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./home";
import Login from "./login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/">
          {!localStorage.getItem("token") ? <Redirect to="/login" /> : <Home />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

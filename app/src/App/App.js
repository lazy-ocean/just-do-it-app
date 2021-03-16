import React from "react";
import { Route, Switch } from "react-router-dom";
//import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

const App = () => {
  const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={Tasks} />
      </Switch>
    </div>
  );
  return (
    <Switch>
      <App />
    </Switch>
  );
};

export default App;

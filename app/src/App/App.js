import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/";
import Tasks from "./pages/Tasks.jsx";
import Modal from "react-modal";
Modal.setAppElement("#root");

const App = () => {
  const App = () => (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/tasks">
        <Tasks />
      </Route>
    </Switch>
  );
  return (
    <Switch>
      <App />
    </Switch>
  );
};

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
//import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Tasks from "./pages/Tasks.jsx";
//import Header from "./components/Header";

const App = () => {
  const App = () => (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
      </Switch>
    </div>
  );
  return (
    <Switch>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Switch>
  );
};

export default App;

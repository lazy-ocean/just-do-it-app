import React from "react";
import { Route, Switch } from "react-router-dom";
//import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Tasks from "./pages/Tasks.jsx";

const App = () => {
  const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tasks" component={Tasks} />
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

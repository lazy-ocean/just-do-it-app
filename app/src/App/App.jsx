import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Tasks from "./pages/tasks";
import Modal from "react-modal";
Modal.setAppElement("#root");

const App = () => {
  const [theme, toggleTheme] = useState("theme--dark");
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  darkMode.addListener((e) => {
    const darkModeOn = e.matches;
    darkModeOn ? toggleTheme("theme--dark") : toggleTheme("theme--light");
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      console.log("browser");
      toggleTheme("theme--dark");
    }
    if (localStorage.getItem("theme")) {
      const t = localStorage.getItem("theme");
      toggleTheme(t);
    }
  }, []);

  const changeTheme = (newTheme) => {
    toggleTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Switch>
      <Route exact path="/" key="home">
        <Home changeTheme={changeTheme} theme={theme} />
      </Route>
      <Route path="/tasks" key="tasks">
        <Tasks changeTheme={changeTheme} theme={theme} />
      </Route>
    </Switch>
  );
};

export default App;

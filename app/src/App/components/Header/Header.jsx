import { Button } from "@chakra-ui/button";
import React from "react";
import "./header.css";

const Header = ({ manageModal }) => {
  return (
    <>
      <div>
        <img src="../logo512.png" alt="ToDo logo" className="header__logo" />
        <h3>Just Do It App</h3>
      </div>
      <Button onClick={() => manageModal("login")}>Login</Button>
      <Button onClick={() => manageModal("register")}>Register</Button>
    </>
  );
};

export default Header;

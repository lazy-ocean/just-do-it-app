import React from "react";
import "./header.css";

const Header = ({ children }) => {
  return (
    <header>
      <div className="header__txt">
        <img src="../logo512.png" alt="ToDo logo" className="header__logo" />
        <h3 className="header__h">Just Do It App</h3>
      </div>
      <div className="header__buttons">{children}</div>
    </header>
  );
};

export default Header;

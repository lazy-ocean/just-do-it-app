import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <header>
      <div className="header__txt">
        <h3 className="header__h">
          <Link to="/">Just Do It App</Link>{" "}
        </h3>
      </div>
      <div className="header__buttons">{children}</div>
    </header>
  );
};

export default Header;

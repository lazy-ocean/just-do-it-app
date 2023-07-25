import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

const Header = ({ children, theme, changeTheme }) => {
  return (
    <header>
      <div className="header__txt">
        <h3 className="header__h">
          <Link to="/" className="link nofocus">
            Just Do It App
          </Link>{" "}
        </h3>
      </div>
      <div className="header__switcher">
        {theme === "theme--dark" ? (
          <RiSunLine onClick={() => changeTheme("theme--light")} />
        ) : (
          <RiMoonClearLine onClick={() => changeTheme("theme--dark")} />
        )}
      </div>
      <div className="header__buttons">{children}</div>
    </header>
  );
};

export default Header;

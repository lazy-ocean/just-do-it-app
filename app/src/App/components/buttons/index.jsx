import React from "react";
import "./button.css";

export const AuthButtonGroup = ({ manageModal }) => {
  return (
    <>
      <Button classn="login" onClick={() => manageModal("login")}>
        Login
      </Button>
      <Button classn="reg" onClick={() => manageModal("register")}>
        Register
      </Button>
    </>
  );
};

export const Button = ({ children, onClick, classn }) => {
  return (
    <button onClick={onClick} className={`btn btn--${classn}`}>
      {children}
    </button>
  );
};

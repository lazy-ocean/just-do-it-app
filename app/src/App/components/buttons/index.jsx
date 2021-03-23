import React from "react";

export const AuthButtonGroup = ({ manageModal }) => {
  return (
    <>
      <Button onClick={() => manageModal("login")}>Login</Button>
      <Button onClick={() => manageModal("register")}>Register</Button>
    </>
  );
};

export const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

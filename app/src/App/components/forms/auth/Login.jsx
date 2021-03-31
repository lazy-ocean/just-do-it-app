import React from "react";
import { Button } from "../../buttons/";

const Login = ({ errors, user, setUser, handleSubmit }) => {
  const { commonErr } = errors;
  return (
    <form onSubmit={handleSubmit} className="modal__form">
      {commonErr ? <p className="modal__error">{commonErr}</p> : null}
      <label htmlFor="username" className="modal__label">
        Login
      </label>
      <input
        className="input modal__input"
        name="username"
        id="username"
        required
        value={user.name}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label htmlFor="password" className="modal__label">
        Password
      </label>
      <input
        className="input modal__input"
        name="password"
        id="password"
        required
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Button type="submit">Log in</Button>
    </form>
  );
};

export default Login;

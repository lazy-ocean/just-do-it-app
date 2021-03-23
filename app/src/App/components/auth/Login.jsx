/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "../buttons/";

const Login = ({ errors, user, setUser }) => {
  const { commonErr } = errors;
  return (
    <>
      {commonErr ? <p>{commonErr}</p> : null}
      <label htmlFor="username">Login</label>
      <input
        name="username"
        id="username"
        required
        value={user.name}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        required
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Button type="submit">Log in</Button>
    </>
  );
};

export default Login;

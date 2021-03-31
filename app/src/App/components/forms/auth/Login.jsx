import React, { useState } from "react";
import { Button } from "../../buttons/";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const Login = ({ errors, user, setUser, handleSubmit }) => {
  const [passwordVisible, togglePasswordVisible] = useState(false);
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
      <div className="password">
        <input
          className="input modal__input"
          name="password"
          id="password"
          type={passwordVisible ? "text" : "password"}
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <i
          className="password__eye"
          onClick={() => togglePasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? <RiEyeOffLine /> : <RiEyeLine />}
        </i>
      </div>

      <Button type="submit">Log in</Button>
    </form>
  );
};

export default Login;

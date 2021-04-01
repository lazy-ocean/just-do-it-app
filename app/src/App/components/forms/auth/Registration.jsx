import React, { useState } from "react";
import { Button } from "../../buttons/";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const Registration = ({ errors, user, setUser, handleSubmit }) => {
  const [passwordVisible, togglePasswordVisible] = useState(false);
  return (
    <form onSubmit={handleSubmit} className="modal__form">
      <label className="modal__label" htmlFor="username">
        Create a username
      </label>
      <input
        className={`input modal__input ${
          errors.username && "modal__input--error"
        }`}
        name="username"
        id="username"
        required
        value={user.name}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      {errors.username ? (
        <p className="modal__error">{errors.username} </p>
      ) : null}
      <label className="modal__label" htmlFor="password">
        Create a password
      </label>
      <div className="password">
        <input
          className={`input modal__input ${
            errors.password && "modal__input--error"
          }`}
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

      {errors.password ? (
        <p className="modal__error">{errors.password} </p>
      ) : null}
      <Button colorScheme="blue" type="submit">
        Create a new account
      </Button>
    </form>
  );
};

export default Registration;

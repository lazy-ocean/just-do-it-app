/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Registration from "./auth/Registration";

const paths = {
  register: "/users",
  login: "/session",
};

const Form = ({ type }) => {
  const defUser = { username: "", password: "" };
  const [user, setUser] = useState(defUser);
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState([]);
  const path = paths[type];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(path, user)
      .then(() => {
        setRedirect(true);
      })
      .catch((e) => {
        setErrors(e.response.data);
      });
  };

  return redirect ? (
    <Redirect to="/tasks" />
  ) : type === "login" ? (
    <Login
      errors={errors}
      user={user}
      setUser={setUser}
      handleSubmit={handleSubmit}
    />
  ) : (
    <Registration
      errors={errors}
      user={user}
      setUser={setUser}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form;

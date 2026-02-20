/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Login from "./auth/Login";
import Registration from "./auth/Registration";

const paths = {
  register: "/users",
  login: "/session",
};

const Form = ({ type }) => {
  const history = useHistory();
  const defUser = { username: "", password: "" };
  const [user, setUser] = useState(defUser);
  const [errors, setErrors] = useState([]);
  const path = paths[type];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(path, user)
      .then(() => {
        history.push("/tasks");
      })
      .catch((e) => {
        setErrors(e.response.data);
      });
  };

  return type === "login" ? (
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

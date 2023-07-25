const express = require("express");
const router = express.Router();
const users = require("../secrets/users");
const User = require("../units/User");
const encrypt = require("../secrets/encryption");

router.get("/", (req, res) => {
  const errors = {};
  const { username, password } = req.body;
  if (!username) {
    errors.username = "Username can't be blank";
  } else {
    const isUniq = !users.some((user) => user.username === username);
    if (!isUniq) {
      errors.username = "This username is already taken";
    }
  }
  if (!password) {
    errors.password = "Password can't be blank";
  } else {
    const regex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    if (!regex.test(password))
      errors.password =
        "Password should contain minimum eight characters, at least one letter and one number";
  }
  if (Object.keys(errors).length > 0) {
    res.status(422).send(errors);
    return;
  }
  const newUser = new User(username, encrypt(password));
  users.push(newUser);
  req.session.username = username;
  res.send("Successfully registered");
});

module.exports = router;

const express = require("express");
const router = express.Router();
const users = require("../secrets/users");
const encrypt = require("../secrets/encryption");

router.get("/", (req, res) => {
  const { username, password } = req.body;
  let user = users.find((u) => u.username === username);
  if (!user || user.password !== encrypt(password)) {
    res.status(400).send({ commonErr: "Invalid nickname or password" });
    return;
  }
  req.session.username = username;
  res.send("Successfully logged in");
});

router.delete("/", (req, res) => {
  req.session.destroy();
  res.send("Session ended");
});

module.exports = router;

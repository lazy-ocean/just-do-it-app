const express = require("express");
const router = express.Router();
const Guest = require("../units/Guest");

router.post("/", (req, res) => {
  let user = new Guest();
  req.session.username = user.username;
  res.send("Successfully logged in");
});

module.exports = router;

const User = require("../units/User");
const Guest = require("../units/Guest");
const encrypt = require("./encryption");

const users = [new Guest()];

module.exports = users;

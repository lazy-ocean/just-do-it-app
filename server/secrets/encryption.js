const crypto = require("crypto");
const salt = require("./salt");

const encrypt = (password) => {
  const hash = crypto.createHmac("sha512", salt);
  hash.update(password);
  const value = hash.digest("hex");
  return value;
};

module.exports = encrypt;


require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (user) => {
  // Prefer JWT_SECRET, fall back to TOKEN_KEY for backwards compatibility
  const secret = process.env.JWT_SECRET || process.env.TOKEN_KEY;
  return jwt.sign(
    { id: user._id, createdAt: user.createdAt },
    secret,
    { expiresIn: '1d' }
  );
};


require("dotenv").config();
const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  // Check for token in cookies or Authorization header
  let token = req.cookies.token;
  if (!token && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      token = parts[1];
    }
  }

  if (!token || typeof token !== 'string' || token.split('.').length !== 3) {
    return res.status(401).json({
      status: false,
      message: "No or malformed token provided",
      redirectTo: "/login"
    });
  }

  try {
    // Use same secret used when creating token. Support JWT_SECRET or TOKEN_KEY env var.
    const secret = process.env.JWT_SECRET || process.env.TOKEN_KEY;
    const decoded = jwt.verify(token, secret);
    const user = await User.findById(decoded.id);

    if (!user) {
      const secureFlag = process.env.NODE_ENV === 'production';
      res.clearCookie('token', {
          httpOnly: true,
          secure: secureFlag,
          sameSite: 'None',
        });
      return res.status(403).json({
        status: false,
        message: "Permission denied: User not found",
        redirectTo: "/login"
      });
    }
    req.user = user;
    next();
  } catch (error) {
    // Token expired or invalid
    const secureFlag = process.env.NODE_ENV === 'production';
    res.clearCookie('token', {
      httpOnly: true,
      secure: secureFlag,
      sameSite: 'None',
    });
    console.error("Token verification error:", error);
    // Return 403 for invalid/expired token so frontend can force re-login
    return res.status(403).json({ status: false, message: "Invalid or expired token", redirectTo: "/login" });
  }
};

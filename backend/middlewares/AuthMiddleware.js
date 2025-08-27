
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
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      res.clearCookie('token', {
        httpOnly: true,
        secure: true,
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
    res.clearCookie('token', {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
    });
    console.error("Token verification error:", error);
    return res.status(403).json({ status: false, message: "Invalid or expired token", redirectTo: "/login" });
  }
};

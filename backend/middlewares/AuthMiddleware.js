
require("dotenv").config();
const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ 
      status: false, 
      message: "No token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);

    if (!user) {
      res.clearCookie('token', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      });
      
      return res.status(404).json({ 
        status: false, 
        message: "User not found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(403).json({ status: false, message: "Invalid token", redirectTo: "https://zerodha-clone-fnnn.onrender.com" });
  }
};


const User = require("../model/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

// Signup Controller
module.exports.Signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({ email, username, password });
    const token = createSecretToken(user);

    const secureFlag = process.env.NODE_ENV === 'production';
    res.cookie('token', token, {
      httpOnly: true,
      secure: secureFlag,
      sameSite: 'None',
      maxAge: 24 * 60 * 60 * 1000 // 1 day expiration
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      token, // <-- include token in response
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      },
      redirectTo: "https://zerodha-clone-dashboard-1388.onrender.com",
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Login Controller
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = createSecretToken(user);

     const secureFlag = process.env.NODE_ENV === 'production';
     res.cookie('token', token, {
      httpOnly: true,
      secure: secureFlag,
      sameSite: 'None',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
  token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      },
      redirectTo: "https://zerodha-clone-dashboard-1388.onrender.com",
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.Logout = (req, res) => {
  try {
    // Clear the HTTP-only cookie
    const secureFlag = process.env.NODE_ENV === 'production';
    res.clearCookie('token', {
      httpOnly: true,
      secure: secureFlag,
      sameSite: 'None',
    });
    // Redirect to frontend login page after logout
    return res.status(200).json({ 
      success: true,
      message: "Logged out successfully",
      redirectTo: "https://zerodha-clone-frontend-clmm.onrender.com/login" // <-- set your actual frontend login page URL here
    });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ success: false, message: "Logout failed" });
  }
};

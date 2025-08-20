
const { Signup, Login, Logout } = require("../controller/AuthController");
const express = require("express");
const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

module.exports = router;

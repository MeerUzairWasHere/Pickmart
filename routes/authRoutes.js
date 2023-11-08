const express = require("express");
const router = express.Router();

const {
  loginUser,
  registerUser,
  logoutUser,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

module.exports = router;

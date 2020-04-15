const express = require("express");
const {
  registerManager,
  registerUser,
  login,
  logout,
} = require("../controllers/auth");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", login);

module.exports = router;

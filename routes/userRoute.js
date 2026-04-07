const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      req.flash("error", "Username or email already exists");
      return res.redirect("/register");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });

    req.flash("success", "Account created! Please sign in");
    res.redirect("/login");
  } catch (err) {
    req.flash("error", "Registration failed: " + err.message);
    res.redirect("/register");
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      req.flash("error", "No account found with that email");
      return res.redirect("/login");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      req.flash("error", "Incorrect password");
      return res.redirect("/login");
    }

    req.session.user = { id: user._id, username: user.username, email: user.email };
    req.flash("success", `Welcome back, ${user.username}`);
    res.redirect("/");
  } catch (err) {
    req.flash("error", "Login failed: " + err.message);
    res.redirect("/login");
  }
});

// LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;

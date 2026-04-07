const express = require("express");
const path = require("path");
const session = require("express-session");
const courseRoute = require("./routes/courseRoute");
const userRoute = require("./routes/userRoute");
const connectDB = require("./db");
const app = express();

connectDB();
const port = 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "elearning_secret",
  resave: false,
  saveUninitialized: false,
}));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "ui"));

// Home route
app.get("/", (req, res) => {
  res.render("index", { title: "Home_page", user: req.session.user });
});

// About route
app.get("/about", (req, res) => {
  res.render("about", { title: "About_us", user: req.session.user });
});

// Service route
app.get("/services", (req, res) => {
  res.render("service", { title: "Service_page", user: req.session.user });
});

// Contact route
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact", user: req.session.user });
});

// Course router
app.use("/courses", courseRoute);

// User auth routes
app.use("/", userRoute);

// Practice Route
app.get("/practice", (req, res) => {
  res.render("practice", { title: "Practice Set", user: req.session.user });
});

// Login form route
app.get("/login", (req, res) => {
  res.render("login", { title: "Login Form", user: req.session.user });
});

// register form route
app.get("/register", (req, res) => {
  res.render("register", { title: "Register Form", user: req.session.user });
});

// Server listen
app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});

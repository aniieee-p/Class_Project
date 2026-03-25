const express = require("express");
const path = require("path");
const courseRoute = require("./routes/courseRoute");
const { timeLog } = require("console");
const app = express();
const port = 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "ui"));

// Home route
app.get("/", (req, res) => {
  res.render("index", { title: "Home_page" });
});

// About route
app.get("/about", (req, res) => {
  res.render("about", { title: "About_us" });
});

// Service route
app.get("/services", (req, res) => {
  res.render("service", { title: "Service_page" });
});

// Contact route
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

// Course router
app.use("/courses", courseRoute);

// Practice Route
app.get("/practice", (req, res) => {
  res.render("practice", {
    title: "Practice Set",
  });
});

// Login form route
app.get("/login", (req, res) => {
  res.render("login", {
    title: "Login Form",
  });
});

// register form route
app.get("/register", (req, res) => {
  res.render("register", {
    title: "Register Form",
  });
});

// Server listen
app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});

const express = require("express");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
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
app.use(flash());

// Make flash + user available in all views
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  res.locals.success = req.flash("success")[0] || null;
  res.locals.error = req.flash("error")[0] || null;
  next();
});

// Auth guard middleware
function requireLogin(req, res, next) {
  if (!req.session.user) {
    req.flash("error", "Please login to access that page");
    return res.redirect("/login");
  }
  next();
}

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "ui"));

// Public routes
app.get("/", (req, res) => res.render("index", { title: "Home" }));
app.get("/about", (req, res) => res.render("about", { title: "About" }));
app.get("/services", (req, res) => res.render("service", { title: "Services" }));
app.get("/contact", (req, res) => res.render("contact", { title: "Contact" }));
app.get("/login", (req, res) => res.render("login", { title: "Login" }));
app.get("/register", (req, res) => res.render("register", { title: "Register" }));

// Protected routes
app.get("/practice", requireLogin, (req, res) => res.render("practice", { title: "Practice" }));
app.get("/profile", requireLogin, (req, res) => res.render("profile", { title: "Profile" }));

// Routers
app.use("/courses", requireLogin, courseRoute);
app.use("/", userRoute);

// Server
app.listen(port, () => console.log(`Server is up at ${port}`));

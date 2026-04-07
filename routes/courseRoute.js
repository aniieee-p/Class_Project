const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// READ
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.render("course", { title: "Courses", courses });
});

// CREATE
router.post("/add", async (req, res) => {
  await Course.create({ course: req.body.course });
  res.redirect("/courses");
});

// UPDATE
router.post("/update/:id", async (req, res) => {
  await Course.findByIdAndUpdate(req.params.id, { course: req.body.course });
  res.redirect("/courses");
});

// DELETE
router.get("/delete/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.redirect("/courses");
});

module.exports = router;

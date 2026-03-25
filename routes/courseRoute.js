const express = require("express");
const router = express.Router();

let courses = [];
let id = 1; // auto increment id


// READ
router.get("/", (req, res) => {
    res.render("course", {
        title: "Courses",
        courses
    });
});


// CREATE
router.post("/add", (req, res) => {

    const newCourse = {
        id: id++,
        course: req.body.course
    };

    courses.push(newCourse);

    res.redirect("/courses");
});


// UPDATE
router.post("/update/:id", (req, res) => {

    const courseId = parseInt(req.params.id);

    courses = courses.map(c => {
        if (c.id === courseId) {
            return {
                ...c,
                course: req.body.course
            };
        }
        return c;
    });

    res.redirect("/courses");
});


// DELETE
router.get("/delete/:id", (req, res) => {

    const courseId = parseInt(req.params.id);

    courses = courses.filter(c => c.id !== courseId);

    res.redirect("/courses");
});


module.exports = router;
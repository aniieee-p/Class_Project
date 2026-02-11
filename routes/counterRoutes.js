const express = require("express");
const router = express.Router();

let courses = [];
let id = 1;

// page route
router.get("/",(req,res)=>{
    res.render("course", {
        title: "course"
    });
});

// Get all courses
router.get("/api",(req,res)=>{
    res.json(courses);
});

// To add course
router.post("/api",(req,res)=>{
    const { name } = req.body; 

    const newCourse = {
        id: id++,
        name
    };
    courses.push(newCourse);

    res.json(newCourse);
});

// To update the course
router.put("/api/:id",(req,res)=>{

    const updateCourse = parseInt(req.params.id);

    let courses = courses.filter(key => key.id === updateCourse);
    const { name } = req.body; 

    if(courses.length > 0) {
        courses.name = name;
    }

    res.json(courses)


});
const express = require("express")
const students = require("./students")
const app = express()




//home
app.get("/", (req, res) => {
    res.send("welcome to our api")
})

//single student
app.get("/api/v1/students/:name", (req, res) => {
    res.json(students.filter((student) => student.name !== req.params.name));
})

//delete student
app.get("/api/v1/students/:name", (req, res) => {
  res.json(students.filter((student) => student.name !== req.params.name));
});


//post student
app.post("/api/v1/students/:name", (req, res) => {
    const students = {
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
    };
    students.push(student);

    res.json(students)
})

//update a student
app.put("api/v1/students/:name", (req, res) => {
    const student = students.((student) => student.name === req.params.name);
    studentFound &&
        students.forEach((student) => {
            student.name === req.params.name
            student.gender === req.params.name
            
        });
    
    res.json(students)
});


//get all students data
app.get("/api/v1/students", (req, res) => {
    res.json(students)
})


const port = process.env.PORT || 7000

app.listen(port, () =>
console.log (`server is running ${port}`))
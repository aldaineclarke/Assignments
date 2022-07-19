const express = require("express");
const app = express();
const student = require("../server/models/student")
const cors = require("cors");
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));

app.get("/api/students/", async (req, res, next)=>{
    // res.json(student.find());
    let students = await student.find();
    res.status(200).json(students)
    
});

app.post("/api/students/create",async(req, res, next)=>{
    let studentData = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        form:req.body.form

    }
    let newStudent = new student(studentData);
    await newStudent.save()
    res.status(201).json(newStudent);
});

app.get("/api/students/:id",async(req,res,next)=>{
    let id = req.params.id;
    let currentStudent = await student.findById(id);
    res.status(200).json(currentStudent);

});

app.delete("/api/students/:id",async(req,res,next)=>{
    let id = req.params.id;
    await student.findByIdAndRemove(id);
    res.status(200).json({message:"Deleted Successfully"})
});

app.patch("/api/students/:id", async(req,res, next)=>{
    let id = req.params.id;
    let data = req.body;

    let updatedStudent = await student.findByIdAndUpdate(id,data,{new: true});

    res.status(200).json(updatedStudent);
})

app.listen(3000,()=>{
    console.log("Server is running");
})
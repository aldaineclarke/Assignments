const express = require("express");
const app = express();
const Student = require("../server/models/student")
const cors = require("cors");
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));

app.get("/api/students/", async (req, res, next)=>{
    try{
        let students = await Student.find();
        res.status(200).json(students)

    }catch(error){
        res.status(400).json({message: "Cannot find students Collection"})
    }
    
});

app.post("/api/students/create",async(req, res, next)=>{
    let studentData = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        form:req.body.form

    }
    let newStudent = new Student(studentData);
    await newStudent.save()
    res.status(201).json(newStudent);
});

app.get("/api/students/:id",async(req,res,next)=>{
    let id = req.params.id;
    try{

        let currentStudent = await Student.findById(id);
        res.status(200).json(currentStudent);
    }catch(err){
        res.status(404).json({message: "Cannot get the student at id : "+ id })
    }

});

app.delete("/api/students/:id",async(req,res,next)=>{
    let id = req.params.id;
    try{
        await Student.findByIdAndRemove(id);
        res.status(200).json({message:"Deleted Successfully"})
    }catch(err){
        res.status(404).json({message: "Cannot delete the student with tid : "+ id })
    }
});

app.patch("/api/students/:id", async(req,res, next)=>{
    let id = req.params.id;
    try{
        let data = req.body;
        let updatedStudent = await student.findByIdAndUpdate(id,data,{new: true});
        res.status(200).json(updatedStudent);
    }catch(err){
        res.status(404).json({message: "Cannot updated the student at id: "+ id })
    }
})

app.listen(3000,()=>{
    console.log("Server is running");
})
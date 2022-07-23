const router = require("express").Router();
const Student = require("../models/student")


router.get("/", async (req, res, next)=>{
    try{
        let students = await Student.find();
        res.status(200).json(students)

    }catch(error){
        res.status(400).json({message: "Cannot find students Collection"})
    }
    
});

router.post("/create",async(req, res, next)=>{
    try{
        let studentData = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        form:req.body.form
        }
        let newStudent = new Student(studentData);
        await newStudent.save()
        res.status(201).json(newStudent)
    }catch(error){

        res.status(404).json({message:error});
    }
});

router.get("/:id",async(req,res,next)=>{
    let id = req.params.id;
    try{

        let currentStudent = await Student.findById(id);
        res.status(200).json(currentStudent);
    }catch(err){
        res.status(404).json({message: "Cannot get the student at id : "+ id })
    }

});

router.delete("/:id",async(req,res,next)=>{
    let id = req.params.id;
    try{
        await Student.findByIdAndRemove(id);
        res.status(200).json({message:"Deleted Successfully"})
    }catch(err){
        res.status(404).json({message: "Cannot delete the student with tid : "+ id })
    }
});

router.patch("/:id", async(req,res, next)=>{
    let id = req.params.id;
    try{
        let data = req.body;
        let updatedStudent = await student.findByIdAndUpdate(id,data,{new: true});
        res.status(200).json(updatedStudent);
    }catch(err){
        res.status(404).json({message: "Cannot updated the student at id: "+ id })
    }
})

module.exports = router;
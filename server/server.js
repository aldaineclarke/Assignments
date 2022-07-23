const express = require("express");
const app = express();
const cors = require("cors");
const studentsRouters = require("../server/routes/students.routes");
const Account = require("../server/models/account");
const ObjectId = require("mongoose").Types.ObjectId;
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));


app.get("/api/accounts/:studentID", async (req, res) => {
        let studentID = req.params.studentID;
    try{
        let account = await Account.findOne({studentId:studentID})
        res.status(200).json(account)

    }catch(err){
        res.status(404).json({message: err})
    }
});

app.post("/api/accounts/", async (req, res) => {
    try{
        let data = {
            accountNum:req.body.accountNum,
            bank:req.body.bank,
            branch:req.body.branch,
            accountType:req.body.accountType,
            status:req.body.status,
            studentId:req.body.studentID,
        }
        data.studentId = new ObjectId(data.studentId)
        let newAccount = await new Account(data).save()
        res.status(201).json(newAccount)
    }catch(err){
        res.status(404).json({message: err})
    }
})

app.use("/api/students/",studentsRouters);
app.listen(3000,()=>{
    console.log("Server is running");
});
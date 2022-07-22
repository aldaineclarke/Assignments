const express = require("express");
const app = express();
const cors = require("cors");
const studentsRouters = require("../server/routes/students.routes");
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));

app.use("/api/students/",studentsRouters);
app.listen(3000,()=>{
    console.log("Server is running");
})
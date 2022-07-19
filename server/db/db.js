const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/studentDB', ()=>{
    console.log("Connected to db")
});

module.exports = mongoose;
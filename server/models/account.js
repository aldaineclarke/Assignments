const mongoose = require('../db/db');

let accountSchema = mongoose.Schema({
    accountNum: String,
    bank:String,
    branch: String,
    accountType:String,
    status: {type:String},
    studentId: {type: mongoose.Types.ObjectId, ref:'Student'}

});

module.exports = mongoose.model('Account', accountSchema);
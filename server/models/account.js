const mongoose = require('../db/db');

let accountSchema = mongoose.Schema({
    accountNum: String,
    bank:String,
    branch: String,
    accountType:String,
    status: String,
    studentId: mongoose.Types.ObjectId()

});

module.exports = mongoose.model('Account', accountSchema);
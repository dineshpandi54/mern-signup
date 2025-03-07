const mongoose = require('mongoose');


const registerSchema = new mongoose.Schema({
    name: String,
    email:{type:String, unique : true},
    password:String,
    hobby:String,
    language:String,
    occupation:String,
    color:String,
    game:String
})

const registerModel = mongoose.model('registers',registerSchema)

module.exports = registerModel

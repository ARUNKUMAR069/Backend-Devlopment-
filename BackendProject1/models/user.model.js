const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true, 
        minlength:[3,"Username must be at least 3 characters long"],
        maxlength:[20,"Username must be at most 20 characters long"]
        
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minlength:[5,"Email must be at least 5 characters long"],
        maxlength:[30,"Email must be at most 30 characters long"]
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:[6,"Password must be at least 6 characters long"]
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;

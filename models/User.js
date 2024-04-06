const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        required:true,
        type:String
    },
    password:{
        type:String, 
        required: true
    }
}, { timestamps:true}
);

export const User = mongoose.model('User', userSchema);
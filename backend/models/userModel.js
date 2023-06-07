const mongoose = require('mongoose');
const schema = mongoose.Schema({
    firstName:String,
    lastName:String,
    phone_number:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
    
})
const User = mongoose.model('User',schema);
module.exports = User
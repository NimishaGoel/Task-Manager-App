const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name : {
        type : String,
        required :true,
        trim : true
    },
    password :{
        type : String,
        trim : true,
        minlength :7,
        validate(value){
            if(value.toLowerCase().includes('password'))
            {
                throw new Error('Password cannot contain password')
            }
        }
    },
    email :{
        type : String,
        trim: true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age : {
        type : Number,
        default : 0

    }
})

module.exports = User

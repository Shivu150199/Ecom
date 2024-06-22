import mongoose from "mongoose";

const authSchema=new mongoose.Schema({
username:{
    type:String,
    required:true,
    unique:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:[true, 'you have to provide password'],
},
profile:{
    type:String,
    default:'https://i.pinimg.com/originals/e3/63/16/e36316cfd05ca21e44d8fabcf1a192be.jpg'
},
isAdmin:{
    type:Boolean,
    default:false
}

},{timestamps:true})



const AuthModel=mongoose.model('Auth',authSchema)

export default AuthModel
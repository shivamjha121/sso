import mongoose from "mongoose";

const usersSchema= new mongoose.Schema({
    name:{type:String,required:true},
    phoneNo:{type:Number,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
})
const usersData= mongoose.model("usersData",usersSchema);
export default usersData
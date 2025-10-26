import mongoose from "mongoose";

const feedbackSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    experience:{type:String,required:true,enum:['very good','good','average','poor']},
    email:{type:String,required:true},
    message:{type:String,required:true}
},{timestamps:true})

export const Feedback=mongoose.model('Feedback',feedbackSchema)
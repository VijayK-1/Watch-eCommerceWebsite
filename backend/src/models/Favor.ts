import mongoose from "mongoose";

const favorSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    productId:{type:String,required:true},
    image:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:String,required:true},
})

export const Favor=mongoose.model('Favor',favorSchema)
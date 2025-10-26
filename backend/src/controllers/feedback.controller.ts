import { Feedback } from "../models/Feedback";
import { Request,Response } from "express";

export const feedbackmsg=async(req:Request,res:Response)=>{
       const {firstname,lastname,email,message,experience}=req.body
        const userId = req.userId as string;
       if(!firstname || !lastname || !email || !message || !['very good','good','average','poor'].includes(experience)){
          return res.status(500).json({message:'Invalid payload'})
       }
       try {
        const newFeedback=await Feedback.create({userId,firstname,lastname,email,message,experience})
        res.json(newFeedback)
       } catch (error) {
        res.status(501).json({message:'feedback creation error'})
       }
}
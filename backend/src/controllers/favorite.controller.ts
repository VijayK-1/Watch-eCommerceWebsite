import { Favor } from "../models/Favor";
import { Request,Response } from "express";

export const addtoFav=async(req:Request,res:Response)=>{
       const {image,name,price,productId}=req.body
       const userId=req.userId as string
       if(!image || !name || !price){
        res.status(400).json({message:'Invalid payload'})
       }
       try {
       let item = await Favor.findOne({ userId, productId });
        item=await Favor.create({userId,image,name,price,productId})
        res.json(item)
       } catch (error) {
        res.status(500).json({message:'add to favorite error'})
       }
}

export const getFav=async(req:Request,res:Response)=>{
       const userId = req.userId as string;
         const items = await Favor.find({ userId });
         res.json(items)
}

export const removeFav=async(req:Request,res:Response)=>{
  const { productId } = req.body;
  const userId = req.userId as string;
  if (!productId) return res.status(400).json({ message: 'Invalid payload' });

  try {
    const item = await Favor.findOne({ userId, productId });
    if (!item) return res.status(404).json({ message: 'Item not found' });

    await item.deleteOne();
    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove item' });
  }
}
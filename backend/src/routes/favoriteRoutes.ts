import { addtoFav,getFav, removeFav } from "../controllers/favorite.controller";
import express from "express";
import authMiddleware from "../middleware/auth";

const router=express.Router()

router.post('/addFav',authMiddleware,addtoFav)
router.get('/',authMiddleware,getFav)
router.post('/remove',authMiddleware,removeFav)

export default router
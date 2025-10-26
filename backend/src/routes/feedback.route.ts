import  express from "express";
import { feedbackmsg } from "../controllers/feedback.controller";
import authMiddleware from "../middleware/auth";

const router=express.Router()
router.post('/msg',authMiddleware,feedbackmsg)

export default router
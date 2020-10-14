import express from "express";
import { getuserMessageByRoom } from "../controllers/message.js";
const router = express.Router();
router.get("/userroommessage", getuserMessageByRoom);
export default router;

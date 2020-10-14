import express from "express";
import {
  createRoom,
  getRoomsByUserId,
  liveChatRoom,
} from "../controllers/rooms.js";
const router = express.Router();
router.post("/createroom", createRoom);
router.get("/:userId", getRoomsByUserId);
router.post("/:roomname", liveChatRoom);
export default router;

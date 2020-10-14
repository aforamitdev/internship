import express from "express";
import { createUser, loginUser } from "../controllers/user.js";
const router = express.Router();
router.post("/createuser", createUser);
router.get("/login", loginUser);
export default router;

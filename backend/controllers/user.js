import User from "../models/user.js";
import mongoose from "mongoose";
export const createUser = async (req, res) => {
  const { number } = req.body;
  try {
    const user = await User.create({
      phone: number,
    });
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (req, res) => {
  const { number } = req.query;
  if (number.length < 10) {
    return res.status(400).json({ message: "Length must be 10" });
  }
  const user = await User.findOne({ phone: number });
  if (!user) {
    const newuser = await User.create({ phone: number });
    return res.status(201).json(newuser);
  }
  return res.status(200).json(user);
};

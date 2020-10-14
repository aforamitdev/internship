import Rooms from "../models/rooms.js";
import Users from "../models/user.js";
import mongoose from "mongoose";
import { ioclient } from "../server.js";
export const createRoom = async (req, res) => {
  const { to, number, message, senderID } = req.body;
  try {
    const receiver = await Users.findOne({ phone: to }).select("_id");
    console.log(receiver);
    if (receiver) {
      const room = await Rooms.create({
        name: `${number}${to}`,
        participents: [senderID, receiver._id],
      });
      const user = await Users.updateMany(
        { phone: { $in: [to, number] } },
        { $push: { rooms: room._id } },
        { multi: true }
      );
      return res.status(201).json(room);
    } else {
      return res
        .status(404)
        .json({ message: `The  user ${to} does not exist ` });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRoomsByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const usersRooms = await Users.findById({ _id: userId })
      .populate("rooms")
      .select("rooms");
    return res.status(200).json(usersRooms);
  } catch (error) {
    console.log(error);
  }
};

export const liveChatRoom = async (req, res) => {
  console.log("Live Room");
};

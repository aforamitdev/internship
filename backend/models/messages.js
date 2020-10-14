import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const MessageSchama = mongoose.Schema({
  message: String,
  sender: {
    type: ObjectId,
    ref: "Users",
  },
  receiver: {
    type: ObjectId,
    ref: "Users",
  },
  room: {
    type: ObjectId,
    ref: "Rooms",
  },
  time: Date,
});

export default mongoose.model("Messages", MessageSchama);

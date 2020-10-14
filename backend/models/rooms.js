import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
const RoomSchama = new mongoose.Schema({
  name: { type: String, unique: true },
  participents: [{ type: ObjectId, ref: "Users" }],
});

export default mongoose.model("Rooms", RoomSchama);

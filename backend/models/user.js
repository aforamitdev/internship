import mongoose from "mongoose";
const UsersSchema = new mongoose.Schema({
  phone: { type: Number, unique: true },
  name: { type: String },
  time: { type: Date },
  logs: { type: Date },
  state: { type: Boolean },
  contacts: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rooms" }],
});

export default mongoose.model("User", UsersSchema);

import express from "express";
import http from "http";
import io from "socket.io";
import cors from "cors";
const app = express();
const server = http.createServer(app);
export const ioclient = io(server);
import database from "./utils/db.js";
database();
app.use(express.json());
app.use(cors("*"));
// router
import user from "./router/user.js";
import room from "./router/room.js";
import message from "./router/message.js";

//models
import Messages from "./models/messages.js";

//
app.use("/api/v1/user", user);
app.use("/api/v1/room", room);
app.use("/api/v1/messages", message);

// socket connection
ioclient.on("connection", function (socket) {
  console.log("connected");
  socket.on("JOIN", function (activeRoom) {
    console.log(activeRoom);

    socket.join(`${activeRoom}`);
  });
  socket.on("NEW_MESSAGE", async function (data) {
    const messages = await Messages.create({
      message: data.message,
      sender: data.sender,
      receiver: data.recipentId,
      room: data.activeRoom,
    });
    socket.to(data.activeRoom).emit("NEW_MESSAGE_FROM", data);
  });
  socket.on("LEAVE_ROOM", (data) => {
    console.log(data, "room sa nikal ");
    socket.leave(data);
  });
});

server.listen(3001, () => {
  console.log("Server started At http://localhost:3000");
});

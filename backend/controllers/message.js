import Message from "../models/messages.js";

export const getuserMessageByRoom = async (req, res) => {
  const { userId, roomId, recipentId } = req.query;
  try {
    const messages = await Message.find({
      room: roomId,
    });
    return res.status(200).json({ message: messages });
  } catch (error) {
    console.log(error);
  }
};

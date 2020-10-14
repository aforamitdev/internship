import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/context.js";
function RecentContects() {
  const [message, setMessage] = useState("");
  const { state, dispatch, socket } = useContext(AppContext);

  useEffect(() => {
    socket.on("NEW_MESSAGE_FROM", (data) => {
      console.log(data, "aya na wala message ");
      dispatch({
        type: "RECEIVED_MESSAGE",
        payload: [data],
      });
    });
  }, []);

  const sendChatMessage = () => {
    try {
      socket.emit("NEW_MESSAGE", {
        activeRoom: state.activeRoom,
        message,
        sender: state.userId,
        recipentId: state.recipentId,
      });
      dispatch({
        type: "SEND_MESSAGE",
        payload: [
          {
            activeRoom: state.activeRoom,
            message,
            sender: state.userId,
            recipentId: state.recipentId,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mx-10 my-5 h-screen'>
      <div className='flex  space-x-3'>
        <input
          type='text'
          className='w-full px-4'
          onChange={(e) => setMessage(e.target.value)}
        />
        <div
          className='bg-gray-700 px-2 py-2 text-white hover:bg-gray-800 hover:shadow-inner'
          onClick={sendChatMessage}
        >
          SEND
        </div>
      </div>
      <div className='my-3 space-y-2  h-screen '>
        <div className='flex  flex-col-reverse space-y-2 overflow-y-auto'>
          {state.messages.map((message, index) => {
            return (
              <span
                key={index}
                className={` p-2 object-contain fit rounded-sm ${
                  state.userId === message.sender
                    ? "bg-gray-700 text-white"
                    : "bg-gray-500 self-end"
                } `}
              >
                {message.message}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RecentContects;

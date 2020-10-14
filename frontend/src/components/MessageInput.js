import React, { useContext, useState } from "react";
import { AppContext } from "../context/context";
const MessageInput = () => {
  const { sendMessage, state, logout, dispatch, createRoom } = useContext(
    AppContext
  );
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  return (
    <div className=' bg-gray-300 '>
      <div className='flex justify-between pt-8 px-5 text-xl'>
        <p className='font-thin'>
          <span className='font-bold'> Textify</span> Because Text
          Messaging-Rock
        </p>
        <div className='text-sm' onClick={() => logout(dispatch)}>
          Logout
        </div>
      </div>
      {/* number  */}
      <div className='my-3 text-xl flex justify-center'>{state.current}</div>
      {/* Text Field  */}

      <div className='grid grid-cols-12 grid-rows-4  p-4 mx-3'>
        <div className='justify-self-end mx-3'>To:</div>
        <div className='col-span-5'>
          <input
            type='text'
            className='w-full px-4'
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className='col-span-6 mx-6 text-gray-600'>{"<<"} Phone Number</div>
        <div className='my-1 justify-self-end mx-3'>Message:</div>
        <div className='my-1 col-span-11 row-span-2 '>
          <input
            type='text'
            className='w-full h-full px-3'
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className='col-start-2 col-span-2 bg-gray-500 grid justify-self-auto'>
          <button
            onClick={() =>
              createRoom({
                message: message,
                number: number,
                to: state.current,
                senderID: state.userId,
              })
            }
          >
            Send Text Message
          </button>
        </div>
      </div>
    </div>
  );
};
export default MessageInput;

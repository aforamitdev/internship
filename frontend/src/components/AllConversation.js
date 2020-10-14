import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/context";
function AllConversation(props) {
  console.log(props);
  const { dispatch, getUserRooms, state, setActiveRoom } = useContext(
    AppContext
  );
  useEffect(() => {
    getUserRooms(dispatch, { userId: state.userId });
  }, [dispatch, getUserRooms]);

  return (
    <div className='bg-gray-300 w-full '>
      <div className='mx-10'>
        {state.rooms ? (
          <div className=' flex flex-col justify-center space-y-2 py-5 '>
            {state.rooms.map((room, index) => (
              <div
                key={index}
                className='h-12 text-start flex items-center px-5 bg-gray-100 cursor-pointer'
                onClick={() => {
                  props.handleChatRoom(room._id);
                  setActiveRoom(dispatch, {
                    activeRoom: room._id,
                    recipentId: room.participents[1],
                  });
                }}
              >
                {room.name}
              </div>
            ))}
          </div>
        ) : (
          <p>Loading chats </p>
        )}
      </div>
    </div>
  );
}

export default AllConversation;

import React, { useReducer } from "react";
import AppReducers from "./AppReducers";
import io from "socket.io-client";
import { api } from "../api";
const initialState = {
  current: localStorage.getItem("current") || null,
  rooms: [],
  messages: [],
  activeRoom: "",
  userId: localStorage.getItem("userId") || null,
  recipentId: "",
};

export const AppContext = React.createContext(initialState);

var socket = io(":3001");

function sendMessage(value) {
  console.log(value);
  if (socket) {
    socket.emit("SEND_MESSAGE", { value });
  }
}
async function createUser(value) {
  try {
    const user = await api.post("/user/createuser", value);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
async function createRoom(value) {
  try {
    const room = await api.post("/room/createroom", value);
    return room;
  } catch (error) {
    console.log(error);
  }
}

async function getUserRooms(dispatch, value) {
  console.log(value);
  const { userId } = value;
  try {
    const allRooms = await api.get(`/room/${userId}`);
    dispatch({
      type: "SET_ROOMS",
      payload: allRooms.data,
    });
  } catch (error) {
    console.log(error);
  }
}

// async function sendChatMessage(dispatch, value) {
//   const { activeRoom, recipentId, message, sender } = value;
//   // send text message
//   if (socket) {
//     socket.emit("NEW_MESSAGE", { recipentId, message, sender, activeRoom });
//     dispatch({
//       type: "SEND_MESSAGE",
//       payload: { recipentId, message, sender },
//     });

//     // recived text message
//     socket.on("NEW_MESSAGE_FROM", (data) => {
//       dispatch({
//         type: "RECEIVED_MESSAGE",
//         payload: data,
//       });
//     });
//   }
// }

async function setActiveRoom(dispatch, value) {
  const { activeRoom, recipentId } = value;
  console.log("SOCKER");

  socket.emit("JOIN", activeRoom);
  dispatch({
    type: "SET_ACTIVE_ROOM",
    payload: { activeRoom, recipentId },
  });
}

async function getUserMessagesForRoom(dispatch, value) {
  const { userId, roomId, recipentId } = value;
  try {
    const messages = await api.get(`/messages/userroommessage`, {
      params: { userId, roomId, recipentId },
    });
    console.log(messages);
    dispatch({
      type: "SEND_MESSAGE",
      payload: messages.data.message,
    });
  } catch (error) {
    console.log(error);
  }
}

async function login(dispatch, number) {
  try {
    const user = await api.get("/user/login", { params: { number: number } });
    console.log(user);
    dispatch({
      type: "USER_DATA",
      payload: {
        current: user.data.phone,
        userId: user.data._id,
        rooms: user.data.rooms,
      },
    });
    localStorage.setItem("current", user.data.phone);
    localStorage.setItem("userId", user.data._id);
  } catch (error) {
    console.log(error);
  }
}

function logout(dispatch) {
  localStorage.removeItem("current");
  localStorage.removeItem("userId");
  dispatch({
    type: "LOG_OUT",
    payload: { current: null, userId: null },
  });
}
function Store({ children }) {
  const [state, dispatch] = useReducer(AppReducers, initialState);
  return (
    <AppContext.Provider
      value={{
        socket,
        state,
        dispatch,
        sendMessage,
        createUser,
        createRoom,
        getUserRooms,
        setActiveRoom,
        // sendChatMessage,
        getUserMessagesForRoom,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default Store;

/*

 <div className='bg-gray-300  px-4 flex  border-b-2 space-x-2 border-gray-700 '>
          <div className='border border-b-2 border-gray-600 p-2 shadow-sm'>
            All Convertations
          </div>
          <div className='border border-b-2 border-gray-600 p-2 shadow-sm'>
            Recent Convertaions
          </div>
          <div className='border border-b-2 border-gray-600 p-2 shadow-sm'>
            Photos{" "}
          </div>
        </div>






*/

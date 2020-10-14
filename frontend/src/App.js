import React, { useContext } from "react";
import AllConversation from "./components/AllConversation";
import MessageInput from "./components/MessageInput";
import { AppContext } from "./context/context";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "./css/output.css";
import ChatWindow from "./components/ChatWindow";
import Login from "./components/Login";
function App() {
  const { state, getUserMessagesForRoom, dispatch, socket } = useContext(
    AppContext
  );
  const [index, setIndex] = React.useState(0);
  const handleTab = (value) => {
    console.log("clicked ");
    getUserMessagesForRoom(dispatch, {
      userId: state.userId,
      roomId: value,
      recipentId: state.recipentId,
    });
    setIndex(1);
  };
  return (
    <div>
      {state.current ? (
        <div className='App  bg-white  grid  justify-items-center py-12 h-screen'>
          <div className='w-9/12 h-full'>
            <MessageInput />
            <Tabs
              selectedIndex={index}
              onSelect={(tabIndex) => setIndex(tabIndex)}
              className='w-full bg-gray-300 auto px-4'
            >
              <TabList className='flex mx-2 px-2 space-x-2  border-gray-500 '>
                <Tab
                  className='border border-b-2 border-gray-600 p-2 shadow-sm'
                  onClick={() => socket.emit("LEAVE_ROOM", state.activeRoom)}
                >
                  All Conversations
                </Tab>
                <Tab className='border border-b-2 border-gray-600 p-2 shadow-sm'>
                  Reacent Conversations
                </Tab>
                <Tab className='border border-b-2 border-gray-600 p-2 shadow-sm'>
                  Photos
                </Tab>
              </TabList>
              <TabPanel>
                <AllConversation handleChatRoom={handleTab} />
              </TabPanel>
              <TabPanel>
                <ChatWindow />
              </TabPanel>
              <TabPanel>
                <p>Amit rai </p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center h-screen'>
          <div>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

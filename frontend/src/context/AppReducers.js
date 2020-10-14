export default (state, action) => {
  switch (action.type) {
    case "NEW_CHAT":
      return "chat Application";
    case "SET_ROOMS":
      return { ...state, ...action.payload };
    case "SET_ACTIVE_ROOM":
      return { ...state, ...action.payload };
    case "SEND_MESSAGE":
      return { ...state, messages: [...state.messages, ...action.payload] };
    case "RECEIVED_MESSAGE":
      return { ...state, messages: [...state.messages, ...action.payload] };
    case "USER_DATA":
      return { ...state, ...action.payload };
    case "LOG_OUT":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

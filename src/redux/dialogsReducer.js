const dialogsReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE-USER-MESSAGE-TEXT':
      state.userMessageBody = action.message;
      return state;
    case 'ADD-MESSAGE':
      const newMessage = {
        id: Math.random(),
        time: '22:00', 
        date: Date(), 
        owner: 'User', 
        text: state.userMessageBody,
      }
      state.messages.push(newMessage);
      state.userMessageBody = '';
      return state;
    default:
      return state;
  }
}

export default dialogsReducer;
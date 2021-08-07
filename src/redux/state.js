const dialogs = [
  {id: 1, name: 'Pavel Durov', status: 'online', photoPath: 'https://secretmag.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2021/04/24/10/4631947/db4ace683955496f18d36e8d682c6805e2d87278.jpg' },
  {id: 2, name: 'Ivan Petrov', status: 'offline', photoPath: 'https://secretmag.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2021/04/24/10/4631947/db4ace683955496f18d36e8d682c6805e2d87278.jpg' },
  {id: 3, name: 'Anna Popova', status: 'online', photoPath: 'https://secretmag.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2021/04/24/10/4631947/db4ace683955496f18d36e8d682c6805e2d87278.jpg' }
];

const messages = [
  {id: 1, time: '22:00', date: 'today', owner: 'Pavel Durov', text: 'hi'},
  {id: 2, time: '22:05', date: 'today', owner: 'Ivan Petrov', text: 'hi hi'},
  {id: 3, time: '22:07', date: 'today', owner: 'Anna Popova', text: '(((((|-|)))))'}
];

const posts = [
  {id: 1, userPhotoPath: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Paul_Thomas_Anderson_2007_crop.jpg', text: 'text text'}
]

export const store = {
  _state: {
    chatPage: {
      dialogs,
      messages,
      userMessageBody: '',
    },
    profilePage : {
      posts,
      newPostText: '',
    }  
  },
  getState() {
    return this._state;
  },
  _callSubscriber(state) {
    console.log(state)
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action){
    if(action.type === 'ADD-POST') {
      const newPost = {
        id: Math.random(),
        userPhotoPath: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Paul_Thomas_Anderson_2007_crop.jpg',
        text: this._state.profilePage.newPostText,
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if(action.type === 'CHANGE-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if(action.type === 'CHANGE-USER-MESSAGE-TEXT') {
      this._state.chatPage.userMessageBody = action.message;
      this._callSubscriber(this._state);
    } else if(action.type === 'ADD-MESSAGE') {
      const newMessage = {
        id: Math.random(),
        time: '22:00', 
        date: Date(), 
        owner: 'User', 
        text: this._state.chatPage.userMessageBody,
      }
      this._state.chatPage.messages.push(newMessage);
      this._state.chatPage.userMessageBody = '';
      this._callSubscriber(this._state);
    }
  },
}

export const postsActionCreator = () => {
  return {
    type: 'ADD-POST',
  }
}

export const changePostActionCreator = (text) => {
  return {
    type: 'CHANGE-POST-TEXT',
    newText: text
  }
}

export const changeMessageActionCreator = (text) => {
  return {
    type: 'CHANGE-USER-MESSAGE-TEXT',
    message: text
  }
}

export const addMessageActionCreator = () => {
  return {
    type: 'ADD-MESSAGE',
  }
}

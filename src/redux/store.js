import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';

const dialogs = [
  {
    id: 1, name: 'Pavel Durov', status: 'online', photoPath: 'https://secretmag.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2021/04/24/10/4631947/db4ace683955496f18d36e8d682c6805e2d87278.jpg',
  },
  {
    id: 2, name: 'Ivan Petrov', status: 'offline', photoPath: 'https://secretmag.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2021/04/24/10/4631947/db4ace683955496f18d36e8d682c6805e2d87278.jpg',
  },
  {
    id: 3, name: 'Anna Popova', status: 'online', photoPath: 'https://secretmag.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2021/04/24/10/4631947/db4ace683955496f18d36e8d682c6805e2d87278.jpg',
  },
];

const messages = [
  {
    id: 1, time: '22:00', date: 'today', owner: 'Pavel Durov', text: 'hi',
  },
  {
    id: 2, time: '22:05', date: 'today', owner: 'Ivan Petrov', text: 'hi hi',
  },
  {
    id: 3, time: '22:07', date: 'today', owner: 'Anna Popova', text: '(((((|-|)))))',
  },
];

const posts = [
  { id: 1, userPhotoPath: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Paul_Thomas_Anderson_2007_crop.jpg', text: 'text text' },
];

const store = {
  _state: {
    chatPage: {
      dialogs,
      messages,
      userMessageBody: '',
    },
    profilePage: {
      posts,
      newPostText: '',
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber(state) {
    console.log(state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.chatPage = dialogsReducer(this._state.chatPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;

import {
  CHANGE_USER_MESSAGE_TEXT, ADD_MESSAGE, ADD_DIALOG, ADD_DIALOGS,
} from './actionTypeConsts';
import { profileApi } from '../utils/api';

const initialState = {
  dialogs: [
    {
      id: Math.random(), name: 'Канье Уэст', status: 'online', photoPath: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28cropped%29.jpg',
    },
    {
      id: Math.random(), name: 'Buffy The Vampire Slayer', status: 'online', photoPath: 'https://mediananny.com/content/images_new/news/620x408/179405.jpg',
    },
  ],
  messages: [
    {
      id: Math.random(),
      time: '22:00',
      date: 'today',
      owner: 'Pavel Durov',
      text: 'Hi!',
    },
    {
      id: Math.random(),
      time: '22:05',
      date: 'today',
      owner: 'Pavel Durov',
      text: 'Exactly 7 years ago Telegram started as an iPhone app. Today we are launching encrypted Video Calls – first on Android due to reasons explained below. Unlike 2013, 2020 is a year when most mobile apps (including Telegram) are best used on an Android phone.',
    },
    {
      id: Math.random(),
      time: '22:07',
      date: 'today',
      owner: 'Pavel Durov',
      text: 'Today I outlined the monetization strategy of Telegram. It will allow us to remain independent and stay true to our values for decades to come –',
    },
  ],
  userMessageBody: '',
};

// Если в dialogsReducer не будет передано значение state,
// то state по умолчанию будет равен initialState.
export const dialogsReducer = (state = initialState, action) => {
  const newMessage = {
    id: Math.random(),
    time: '22:00',
    date: Date(),
    owner: 'User',
    text: state.userMessageBody,
  };
  switch (action.type) {
    case CHANGE_USER_MESSAGE_TEXT:
      return {
        ...state,
        userMessageBody: action.message,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, newMessage],
        userMessageBody: '',
      };
    case ADD_DIALOG:
      return {
        ...state,
        dialogs: [...state.dialogs, {
          id: action.id,
          name: action.dialogName,
          status: 'online',
          photoPath: action.photoPath,
        }],
      };
    case ADD_DIALOGS:
      return {
        ...state,
        dialogs: [...state.dialogs].concat(action.frends),
      };
    default:
      return state;
  }
};

// объекты со свойством type, и значениями, необходимыми для работы reducer-ф-й,
// обернуты в стрелочные ф-ии,
// чтобы наш компонент как можно меньше знал о логике работы с данными,
// и лишь вызывал отдельные ф-ии по необходимости
export const changeMessageActionCreator = (text) => ({
  type: CHANGE_USER_MESSAGE_TEXT,
  message: text,
});

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const addDialogActionCreator = (id, dialogName, photoPath) => ({
  type: ADD_DIALOG,
  id,
  dialogName,
  photoPath,
});

export const addDialogsActionCreator = (frends) => ({
  type: ADD_DIALOGS,
  frends,
});

export const addDialogsThunkCreator = () => (dispatch) => {
  profileApi.addFriends()
    .then((data) => {
      if (data.resultCode === 0) dispatch(addDialogsActionCreator(data.items));
    })
    .catch((e) => console.log(e));
};

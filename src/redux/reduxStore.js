import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';

// просто создать store c помощью createStore недостаточно
// для конфигурации объекта store передадим методу combineReducers все наши reducers в виде объекта
const reducers = combineReducers({
  chatPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;

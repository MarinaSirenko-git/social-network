import {
  applyMiddleware, combineReducers, createStore, compose,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';

// просто создать store c помощью createStore недостаточно
// для конфигурации объекта store передадим методу combineReducers все наши reducers в виде объекта
const rootReducer = combineReducers({
  chatPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export type RootReducerStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk)),
);

export default store;

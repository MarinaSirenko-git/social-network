import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

// просто создать store c помощью createStore недостаточно
// для конфигурации объекта store передадим методу combineReducers все наши reducers в виде объекта
const reducers = combineReducers({
  chatPage: dialogsReducer, 
  profilePage: profileReducer,
});

let store = createStore(reducers);

export default store;
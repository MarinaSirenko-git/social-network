import { createSelector } from 'reselect';

const getDialogsElements = (state) => state.chatPage.dialogs;

export const getDialogsElementsSelector = createSelector(getDialogsElements, (dialogs) => {
  console.log(dialogs);
  const filtredDialogs = dialogs.filter(() => true);
  return filtredDialogs;
});
export const getMessagesElements = (state) => state.chatPage.messages;
export const getIsAuth = (state) => state.auth.isAuth;

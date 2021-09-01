import { RootReducerStateType } from './reduxStore';
import { UserType } from '../types/types';

export const getUsers = (state: RootReducerStateType): Array<UserType> => state.usersPage.users;
export const getPageSize = (state: RootReducerStateType): number => state.usersPage.pageSize;
export const getTotalUsersCount = (state: RootReducerStateType): number => state.usersPage.totalUsersCount;
export const getCurrentPage = (state: RootReducerStateType): number => state.usersPage.currentPage;
export const getIsLoading = (state: RootReducerStateType): boolean => state.usersPage.isLoading;
export const getisFetching = (state: RootReducerStateType): Array<number> => state.usersPage.isFetching;
export const getIsAuth = (state: RootReducerStateType) => state.auth.isAuth;

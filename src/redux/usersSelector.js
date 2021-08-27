export const getUsers = (state) => state.usersPage.users;
export const getPageSize = (state) => state.usersPage.pageSize;
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getIsLoading = (state) => state.usersPage.isLoading;
export const getisFetching = (state) => state.usersPage.isFetching;
export const getIsAuth = (state) => state.auth.isAuth;
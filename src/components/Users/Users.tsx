import React, { ReactElement } from 'react';
import { Pagination } from 'antd';
import UsersElements from '../UsersElements/UsersElements';
import './Users.css';

type Props = {
  totalUsersCount: number,
  currentPage: number,
  users: any,
  unfollowUserThunk: any,
  followUserThunk: any,
  isFetching: any,
  addDialog: any,
  onPageChanged: any
};

function Users({
  totalUsersCount,
  currentPage,
  onPageChanged,
  users,
  unfollowUserThunk,
  followUserThunk,
  isFetching,
  addDialog,
}: Props): ReactElement {
  const handleFollowButtonClick = (id: number, name: string, photoPath: string) => {
    followUserThunk(id);
    addDialog(id, name, photoPath);
  };

  return (
    <section className="users">
      <div className="users__pagination">
        <Pagination onChange={onPageChanged} defaultCurrent={currentPage} total={totalUsersCount} />
      </div>
      <div className="users__cards">
        <UsersElements
          users={users}
          isFetching={isFetching}
          unfollowUserThunk={unfollowUserThunk}
          handleFollowButtonClick={handleFollowButtonClick}
        />
      </div>
    </section>
  );
}

export default Users;

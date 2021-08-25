import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Card, Avatar, Button, Pagination,
} from 'antd';
import { photoPlug } from '../../utils/consts';
import { getFirstChar } from '../../utils/utils';
import './Users.css';

function Users({
  totalUsersCount,
  currentPage,
  onPageChanged,
  users,
  unfollowUserThunk,
  followUserThunk,
  isFetching,
  addDialog,
}) {
  // const pageCount = Math.ceil(totalUsersCount / pageSize);
  // const pages = [];
  // for (let i = 1; i <= pageCount; i++) {
  //   pages.push(i);
  // }

  const { Meta } = Card;

  const handleFollowButtonClick = (id, name, photoPath) => {
    followUserThunk(id);
    addDialog(id, name, photoPath);
  };

  return (
    <section className="users">
      <div className="users__pagination">
        <Pagination onChange={onPageChanged} defaultCurrent={currentPage} total={totalUsersCount} />
      </div>
      <div className="users__cards">
        {users.map((u) => (
          <Card
            key={u.id * Math.random()}
            style={{ width: 300 }}
            cover={<img alt="обложка" src={photoPlug} />}
          >
            <Meta
              avatar={(
                <NavLink to={`/profile/${u.id}`}>
                  <Avatar
                    style={{
                      color: '#f56a00',
                      backgroundColor: '#fde3cf',
                    }}
                  >
                    {getFirstChar(u.name)}
                  </Avatar>
                </NavLink>
            )}
              title={u.name}
              description="Frontend-разработчик"
            />
            {u.isFollow
              ? <Button type="dashed" disabled={isFetching.some((i) => i === u.id)} onClick={() => unfollowUserThunk(u.id)}>Удалить из друзей</Button>
              : <Button type="dashed" disabled={isFetching.some((i) => i === u.id)} onClick={() => handleFollowButtonClick(u.id, u.name, u.photos.large)}>Добавить в друзья</Button> }
          </Card>
        ))}
      </div>
      <div>
        {/* {pages.map(i => <button key={Math.random()}
          className={currentPage === i ? 'pagination-btn_active' : ''}
          type="button"
          onClick={() => {onPageChanged(i)}}>
          {i}
        </button>)} */}
      </div>
    </section>
  );
}

export default Users;

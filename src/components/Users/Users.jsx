import React from 'react';
import { NavLink } from 'react-router-dom';
import { photoPlug } from '../../utils/consts';
import { Card, Avatar, Button, Pagination } from 'antd';
import {getFirstChar} from '../../utils/utils.js';
import './Users.css';

function Users ({
  totalUsersCount, 
  pageSize, 
  currentPage, 
  onPageChanged, 
  users, 
  unfollowUserThunk, 
  followUserThunk,
  isFetching
  }) {

  const pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for(let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  const { Meta } = Card;

  return (
    <section className="users">
      <div className="users__pagination">
        <Pagination onChange={onPageChanged} defaultCurrent={currentPage} total={totalUsersCount} />
      </div>
      <div className="users__cards">
        {users.map((u) => { return <Card 
          key={u.id * Math.random()} 
          style={{ width: 300 }} 
          cover={<img alt="обложка" src={photoPlug}/>}
          >
            <Meta avatar={
              <NavLink to={`/profile/${u.id}`}>
                {/* <Avatar src={u.photos.small === null ? photoPlug : u.photos.small} alt="фото пользователя" /> */}
                <Avatar
                  style={{
                    color: '#f56a00',
                    backgroundColor: '#fde3cf',
                  }}
                >
                  {getFirstChar(u.name)}
                </Avatar>
              </NavLink>
            } title={u.name} description="Frontend-разработчик"
            />
            {u.isFollow 
              ?
              <Button type="dashed" disabled={isFetching.some(i => i === u.id)} onClick={() => unfollowUserThunk(u.id)}>Удалить из друзей</Button> 
              : 
              <Button type="dashed" disabled={isFetching.some(i => i === u.id)} onClick={() => followUserThunk(u.id)}>Добавить в друзья</Button> }
          </Card>})
        }
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
  )
}

export default Users;
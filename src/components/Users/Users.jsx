import React from 'react';
import { photoPlug } from '../../utils/consts';
import './Users.css';

function Users ({totalUsersCount, pageSize, currentPage, onPageChanged, users, unfollowUser, followUser}) {

  const pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for(let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map(i => <button key={Math.random()} 
          className={currentPage === i ? 'pagination-btn_active' : ''} 
          type="button"
          onClick={() => {onPageChanged(i)}}>
          {i}
        </button>)}
      </div>
      <ul>
      {users.map((u) => {
          return <li key={u.id * Math.random()}>
            <img src={u.photos.small === null ? photoPlug : u.photos.small} alt="фото пользователя" />
            <span>{u.name}</span>
            {u.isFollow 
            ?
            <button onClick={() => unfollowUser(u.id)}>Удалить из друзей</button> 
            : 
            <button onClick={() => followUser(u.id)}>Добавить в друзья</button> }
          </li>})
        }
      </ul>
    </div>
  )
}

export default Users;
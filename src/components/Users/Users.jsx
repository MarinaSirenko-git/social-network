import React from 'react';
import { NavLink } from 'react-router-dom';
import { photoPlug } from '../../utils/consts';
import { followUserQuery, unfollowUserQuery } from '../../utils/api';
import './Users.css';

function Users ({
  totalUsersCount, 
  pageSize, 
  currentPage, 
  onPageChanged, 
  users, 
  unfollowUser, 
  followUser,
  setIsFetching,
  isFetching
  }) {

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
            <NavLink to={`/profile/${u.id}`}>
              <img src={u.photos.small === null ? photoPlug : u.photos.small} alt="фото пользователя" />
            </NavLink>
            <span>{u.name}</span>
            {u.isFollow 
            ?
            <button disabled={isFetching.some(i => i === u.id)} onClick={() => {
              setIsFetching(true, u.id)
              unfollowUserQuery(u.id)
              .then(data => {
                if(data.resultCode === 0) {
                  unfollowUser(u.id)
                }
              })
              .catch(e => console.log(e))
              .finally(() => setIsFetching(false, u.id))
            }}>Удалить из друзей</button> 
            : 
            <button disabled={isFetching.some(i => i === u.id)} onClick={() => {
              console.log(isFetching.some(i => i === u.id))
              console.log(u.id)
              setIsFetching(true, u.id)
              followUserQuery(u.id)
              .then(data => {
                if(data.resultCode === 0) {
                  followUser(u.id)
                }
              })
              .catch(e => console.log(e))
              .finally(() => setIsFetching(false, u.id)) 
            }}>Добавить в друзья</button> }
          </li>})
        }
      </ul>
    </div>
  )
}

export default Users;
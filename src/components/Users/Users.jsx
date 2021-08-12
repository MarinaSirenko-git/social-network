import axios from 'axios';
import React from 'react';
import { photoPlug } from '../../utils/consts';
import './Users.css';

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.pageSize}`)
    .then((res) => {
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount)
    })
    .catch((e) => console.log(e));
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.pageSize}`)
    .then((res) => {
      this.props.setUsers(res.data.items);
    })
    .catch((e) => console.log(e));
  }

  render(){
    const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for(let i = 1; i <= pageCount; i++) {
      pages.push(i)
    }
    return (
    <div>
      <div>
        {pages.map(i => <button key={Math.random()} 
          className={this.props.currentPage === i ? 'pagination-btn_active' : ''} 
          type="button"
          onClick={() => {this.onPageChanged(i)}}>
          {i}
        </button>)}
      </div>
      <ul>
      { this.props.users.map((u) => {
          return <li key={u.id * Math.random()}>
            <img src={u.photos.small === null ? photoPlug : u.photos.small} alt="фото пользователя" />
            <span>{u.name}</span>
            {u.isFollow 
            ?
            <button onClick={() => this.props.unfollowUser(u.id)}>Удалить из друзей</button> 
            : 
            <button onClick={() => this.props.followUser(u.id)}>Добавить в друзья</button> }
          </li>})
        }
      </ul>
    </div>)
  }
}

export default Users;
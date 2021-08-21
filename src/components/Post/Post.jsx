import React from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import './Post.css'

function Post({ userPhotoPath, text }) {

  return(
    <Comment
      author={<p>Han Solo</p>}
      avatar={
        <Avatar
          src={userPhotoPath}
          alt="Han Solo"
        />
      }
      content={
        <p>{text}</p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  )

}

export default Post;
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Card, Avatar, Button,
} from 'antd';
import { photoPlug } from '../../utils/consts';
import { getFirstChar } from '../../utils/utils';

type Props = {
  users: any,
  isFetching: any,
  unfollowUserThunk: any,
  handleFollowButtonClick: any,
};

function UsersElements({
  users,
  isFetching,
  unfollowUserThunk,
  handleFollowButtonClick,
}: Props): ReactElement {
  const { Meta } = Card;

  const usersElements = users.map((u: any) => (
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
        ? <Button type="dashed" disabled={isFetching.some((i: any) => i === u.id)} onClick={() => unfollowUserThunk(u.id)}>Удалить из друзей</Button>
        : <Button type="dashed" disabled={isFetching.some((i: any) => i === u.id)} onClick={() => handleFollowButtonClick(u.id, u.name, u.photos.large)}>Добавить в друзья</Button> }
    </Card>
  ));

  return (
    <>
      { usersElements }
    </>
  );
}

export default UsersElements;

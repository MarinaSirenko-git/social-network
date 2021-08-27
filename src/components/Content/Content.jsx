import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import UsersContainer from '../../containers/UsersContainer';
import ProfileContainer from '../../containers/ProfileContainer';
import LoginContainer from '../../containers/LoginContainer';
import './Content.css';

const DialogsContainer = React.lazy(() => import('../../containers/DialogsContainer'));

function Content() {
  return (
    <main className="content">
      <Route path="/profile/:userId?">
        <ProfileContainer />
      </Route>
      <Route path="/dialogs">
        <Suspense fallback={<div>Загрузка...</div>}>
          <DialogsContainer />
        </Suspense>
      </Route>
      <Route path="/users">
        <UsersContainer />
      </Route>
      <Route path="/login">
        <LoginContainer />
      </Route>
    </main>
  );
}

export default Content;

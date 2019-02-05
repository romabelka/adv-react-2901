import React from 'react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import {signOut} from '../ducks/auth'

const Header = ({user, signOut, history}) => {
  const onClick = () => {
    signOut();
    history.push('/auth');
  };

  return (
    <div>
      {user && <button onClick={onClick}>Sign Out</button>}
    </div>
  );
};

const enhance = compose(
  connect(state => ({user: state.auth.user}), {signOut}),
  withRouter,
);

export default enhance(Header);

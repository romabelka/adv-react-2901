import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import SignInForm from '../../auth/sign-in-form'
import SignUpForm from '../../auth/sign-up-form'
import {signIn, signUp, signOut} from '../../../ducks/auth'

const AuthPage = ({user, signOut, signIn, signUp}) => {
  const handleSignIn = ({email, password}) => signIn(email, password);
  const handleSignUp = ({email, password}) => signUp(email, password);

  const getSignInForm = () => <SignInForm onSubmit={handleSignIn}/>;
  const getSignUpForm = () => <SignUpForm onSubmit={handleSignUp}/>;
  return (
    <div>
      <h1>Auth Page</h1>
      <div>
        <NavLink to="/auth/sign-in">Sign In</NavLink>
      </div>
      <div>
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
      </div>

      <Route path="/auth/sign-in" render={getSignInForm}/>
      <Route path="/auth/sign-up" render={getSignUpForm}/>
      {user && <button onClick={signOut}>Sign Out</button>}
    </div>
  )
};


export default connect(state => ({user: state.auth.user}), {signIn, signUp, signOut})(AuthPage)

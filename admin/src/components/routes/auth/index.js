import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'

import { signIn, signUp } from '../../../ducks/auth'
import SignInForm from '../../auth/sign-in-form'
import SignUpForm from '../../auth/sign-up-form'

class AuthPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h1>Auth Page</h1>
        <div>
          <NavLink to="/auth/sign-in">Sign In</NavLink>
        </div>
        <div>
          <NavLink to="/auth/sign-up">Sign Up</NavLink>
        </div>

        <Route path="/auth/sign-in" render={this.getSignInForm} />
        <Route path="/auth/sign-up" render={this.getSignUpForm} />
      </div>
    )
  }

  getSignInForm = () => <SignInForm onSubmit={this.handleSignIn} />
  getSignUpForm = () => <SignUpForm onSubmit={this.handleSignUp} />

  handleSignIn = ({ email, password }) => this.props.signIn(email, password)
  handleSignUp = ({ email, password }) => this.props.signUp(email, password)
}

export default connect(
  null,
  { signIn, signUp }
)(AuthPage)

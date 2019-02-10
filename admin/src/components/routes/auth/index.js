import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import SignInForm from '../../auth/sign-in-form'
import SignUpForm from '../../auth/sign-up-form'
import {
  signInRequest as signIn,
  signUp,
  tooManySignInAttempts
} from '../../../ducks/auth'

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

  getSignInForm = () => (
    <SignInForm
      onSubmit={this.handleSignIn}
      tooManySignInAttempts={this.props.tooManySignInAttempts}
    />
  )
  getSignUpForm = () => <SignUpForm onSubmit={this.handleSignUp} />

  handleSignIn = ({ email, password }) => this.props.signIn(email, password)
  handleSignUp = ({ email, password }) => this.props.signUp(email, password)
}

const mapStateToProps = (state) => ({
  tooManySignInAttempts: tooManySignInAttempts(state)
})

export default connect(
  mapStateToProps,
  { signIn, signUp }
)(AuthPage)

import React, { Component } from 'react'
import {Route, NavLink} from 'react-router-dom'
import SignInForm from '../../auth/sign-in-form'
import SignUpForm from '../../auth/sign-up-form'

class AuthPage extends Component {
    static propTypes = {

    }

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

                <Route path="/auth/sign-in" render={this.getSignInForm}/>
                <Route path="/auth/sign-up" render={this.getSignUpForm}/>
            </div>
        )
    }

    getSignInForm = () => <SignInForm onSubmit = {this.handleSignIn}/>
    getSignUpForm = () => <SignUpForm onSubmit = {this.handleSignUp}/>

    handleSignIn = ({ email, password }) => console.log('---', 'sign in', email, password)
    handleSignUp = () => console.log('---', 'sign up')
}

export default AuthPage

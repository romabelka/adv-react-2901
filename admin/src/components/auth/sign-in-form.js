import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import {connect} from "react-redux";
import {isAllowedToSignInSelector} from '../../ducks/auth'

class SignInForm extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <h3>Sign In</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <div>
                        <div>email:</div>
                        <div>
                            <Field component="input" name="email"/>
                        </div>
                    </div>
                    <div>
                        <div>password:</div>
                        <div>
                            <Field component="input" name="password" type="password"/>
                        </div>
                    </div>
                    <button disabled={!this.props.isAllowedToSingIn} type="submit">Sign In</button>
                    {!this.props.isAllowedToSingIn && <div>Больше 3-х неудачных попыток, вы сможете попробовать снова через 1 минуту</div>}
                </form>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        isAllowedToSingIn: isAllowedToSignInSelector(state)
    })
)(
    reduxForm({
        form: 'sign-in'
    })(SignInForm))

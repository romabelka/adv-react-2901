import React from 'react'
import {connect} from "react-redux";
import {checkAuth} from "../../ducks/auth";
import {AuthContext} from "../auth/auth-context";

class AuthProvider extends React.Component {
    render() {
        return <AuthContext.Provider value={{user: this.props.auth && this.props.auth.user}}>
            {this.props.children}
        </AuthContext.Provider>;
    }

    componentDidMount() {
        this.props.checkAuth();
    }
}

export default connect(({auth}) => ({auth}), {checkAuth})(AuthProvider);
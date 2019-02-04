import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getUser, getAuthStatus, AUTH_PENDING} from '../../ducks/auth'

class LockedRoutesBounder extends React.Component {

    render() {
        if(this.props.authStatus === AUTH_PENDING) return <div>Загрузка...</div>

        if (!this.props.user) return <Redirect to={'/auth'}/>

        return this.props.children;
    }
}

export default connect((state) => {
    return {
        user: getUser(state),
        authStatus: getAuthStatus(state)
    }
})(LockedRoutesBounder)
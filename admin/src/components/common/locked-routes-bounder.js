import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getUser} from '../../ducks/auth'

class LockedRoutesBounder extends React.Component {

    render() {
        if (!this.props.user) return <Redirect to={'/auth'}/>

        return this.props.children;
    }
}

export default connect((state) => {
    return {
        user: getUser(state)
    }
})(LockedRoutesBounder)
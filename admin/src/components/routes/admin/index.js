import React, { Component } from 'react'
import {Route, NavLink, Redirect} from 'react-router-dom'
import ParticipantsPage from '../participants'
import {connect} from 'react-redux'
import {getUser} from '../../../ducks/auth'

class AdminPage extends Component {
    render() {
        if (!this.props.user)
            return <Redirect to="/auth"/>
        return (
            <div>
                <h1>Admin</h1>
                <div>
                    <NavLink to="/admin/participants">Participants</NavLink>
                </div>
                <Route path="/admin/participants" component={ParticipantsPage}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: getUser(state)
})

export default connect(mapStateToProps)(AdminPage)

import React, { Component } from 'react'
import {Route, NavLink} from 'react-router-dom'
import ParticipantsPage from '../participants'

class AdminPage extends Component {
    render() {
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

export default AdminPage

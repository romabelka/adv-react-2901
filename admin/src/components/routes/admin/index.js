import React, { Component } from 'react'
import {Route, NavLink, Redirect} from 'react-router-dom'
import ParticipantsPage from '../participants'
import {connect} from 'react-redux'
import {getUser, signOut} from '../../../ducks/auth'

class AdminPage extends Component {
    render() {
        if (!this.props.user)
            return <Redirect to="/auth"/>
        return (
            <div>
                <h1>Admin</h1>
                <div>
                    <NavLink to="/admin/participants">Participants</NavLink>
                    <div>
                        <span onClick={this.handleSignOut} style={{cursor: 'pointer'}}>Sign Out</span>
                    </div>
                </div>
                <Route path="/admin/participants" component={ParticipantsPage}/>
            </div>
        )
    }

    handleSignOut = e => {
        this.props.dispatch(signOut())
    }
}

const mapStateToProps = state => ({
    user: getUser(state)
})

export default connect(mapStateToProps)(AdminPage)

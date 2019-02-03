import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {userSelector} from '../../../selectors'

class AdminPage extends Component {
    static propTypes = {

    }

    render() {
        const { user } = this.props
        return (
            <div>
                {!user && <Redirect to={'/auth'} />}
                <h1>Admin</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: userSelector(state)
})

export default connect(mapStateToProps)(AdminPage)

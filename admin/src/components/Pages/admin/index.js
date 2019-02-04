import React, { Component } from 'react'
import { connect } from "react-redux";

class AdminPage extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <h1>Admin</h1>
                <code>
                    {JSON.stringify(this.props)}
                </code>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: Boolean(state.auth.user)
    }
};
export default connect(mapStateToProps, {})(AdminPage)

import React, { Component } from 'react'
import { connect } from "react-redux";

class UserList extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <h1>UserList</h1>
                <code>
                    {JSON.stringify(this.props)}
                </code>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.userAuth
    }
};
export default connect(mapStateToProps, {})(UserList)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import UsersListForm from '../../forms/UsersListForm'
import { createUser } from "../../../ducks/users";

class UserList extends Component {
    render() {
        return (
            <div>
                <UsersListForm onSubmit={this.handleSubmit}/>
                <h4>Добавьте пользователя</h4>
                {this.props.users.map(({id, name, other}) => {
                    return (<div key={id}>
                        User: {name}, other data {other}
                    </div>)
                })
                }
            </div>
        )
    }

    handleSubmit = ({name, other}) => {
        this.props.createUser({
            name,
            other,
        })
    }
}

const mapStateToProps = (state) => {
    console.log('state.users = ', state.users.users)
    return {
        users: state.users.users
    }
}
export default connect(
    mapStateToProps,
    {createUser}
)(UserList)



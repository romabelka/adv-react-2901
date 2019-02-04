import React, {Component} from 'react'
import {NavLink, Route} from "react-router-dom";
import AddPeopleForm from "../../people-list/add-people-form";
import PeopleList from "../../people-list/people-list";
import {addPerson, personSelector} from "../../../ducks/person";
import connect from "react-redux/es/connect/connect";

class AdminPage extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <h1>Admin</h1>
                <div>
                    <NavLink to="/admin/people-list">People list</NavLink>
                </div>

                <Route path="/admin/people-list" render={() => {
                    return (<div>
                        <AddPeopleForm onSubmit={this.handleAddPerson}/>
                        <PeopleList people={this.props.people}/>
                    </div>)
                }}/>
            </div>
        )
    }

    handleAddPerson = ({email, firstName, secondName}) => this.props.addPerson(email, firstName, secondName)
}

export default connect(state => {
    return {
        people: personSelector(state)
    }}, {addPerson})(AdminPage)

import React, {Component} from 'react'
import LockedRoutesBounder from '../../common/locked-routes-bounder'
import AddPersonForm from '../../admin/add-person-form'
import {getPersons, savePerson} from "../../../ducks/persons";
import {connect} from 'react-redux'

class AdminPage extends Component {
    static propTypes = {}

    render() {
        return (
            <LockedRoutesBounder>
                <div>
                    <h1>Admin</h1>
                </div>
                <AddPersonForm onSubmit={this.handleSavePerson}/>
                <div>
                    {this.props.persons.map((person) => <div>
                        Имя: {person.firstName}
                        Фамилия: {person.secondName}
                        Почта: {person.email}
                        </div>)
                    }
                </div>
            </LockedRoutesBounder>
        )
    }

    handleSavePerson = (personData) => this.props.savePerson(personData)
}

export default connect(state => {
    return {
        persons: getPersons(state)
    }
}, {
    savePerson
})(AdminPage)

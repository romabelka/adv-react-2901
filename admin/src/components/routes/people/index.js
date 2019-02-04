import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddForm from '../../people/add-person-form'
import People from '../../../components/people/people-list'
import { addPerson, peopleListSelector } from '../../../ducks/people'

class AuthPage extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <h1>People Page</h1>
        <AddForm onSubmit={this.handleAddPerson} />
        <People people={this.props.people} />
      </div>
    )
  }


  handleAddPerson = (person) => this.props.addPerson(person)
}

export default connect((state) => {
  return {
    people: peopleListSelector(state)
  }
}, { addPerson })(AuthPage)

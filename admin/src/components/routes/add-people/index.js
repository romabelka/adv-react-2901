import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { addPeople } from '../../../ducks/peoples'
import AddPeopleForm from '../../peoples/add-people-form'
import ListPeople from '../../peoples/list-people'

class AddPeople extends Component {
  handleAddPeopleForm = ({ fname, lname, email }) => this.props.addPeople(fname, lname, email)

  render() {
    return (
      <Fragment>
        <h1>Add People</h1>
        <AddPeopleForm onSubmit = {this.handleAddPeopleForm} />
        <ListPeople />
      </Fragment>
    )
  }
}

export default connect(null, { addPeople })(AddPeople)

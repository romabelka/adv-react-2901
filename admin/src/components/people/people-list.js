import React, { Component } from 'react'
import { connect } from 'react-redux'
import { peopleSelector, fetchPeople } from '../../ducks/people'
import PersonCard from './person-card'

class PeopleList extends Component {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchPeople()
  }

  render() {
    return (
      <div>
        {this.props.people.map((person) => (
          <PersonCard person={person} key={person.id} />
        ))}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    people: peopleSelector(state)
  }),
  { fetchPeople }
)(PeopleList)

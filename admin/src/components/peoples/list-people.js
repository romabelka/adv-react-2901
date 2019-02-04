import React, { Component } from 'react'
import { connect } from 'react-redux'
import { peopleListSelector } from '../../ducks/peoples'

class ListPeople extends Component {
  render() {
    const { peoples } = this.props

    if (peoples.length === 0) {
      return (
        <h2>People List is empty</h2>
      )
    }

    const peopleList = peoples.map(({id, fname, lname, email}, i) => (
      <tr key={id}>
        <td>{i + 1}</td>
        <td>{`${lname} ${fname}`}</td>
        <td>{email}</td>
      </tr>
    ))

    return (
      <div>
        <h2>People List</h2>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
            {peopleList}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  peoples: peopleListSelector(state),
})

export default connect(mapStateToProps)(ListPeople)

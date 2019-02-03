import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListPeople extends Component {
  render() {
    return (
      <div>
        ListPeople
      </div>
    );
  }
}

export default connect()(ListPeople)

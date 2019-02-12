import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectedEventCard extends Component {
  static propTypes = {}

  render() {
    const { event } = this.props
    return (
      <div>
        <h3>{event.title}</h3>
        <p>{event.where}</p>
      </div>
    )
  }
}

export default SelectedEventCard

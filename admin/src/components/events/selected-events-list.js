import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectedEventsSelector } from '../../ducks/events'
import SelectedEventCard from './selected-event-card'

class SelectedEventsList extends Component {
  static propTypes = {}

  render() {
    return <div>{this.eventList()}</div>
  }

  eventList = () =>
    this.props.events.map((event) => (
      <SelectedEventCard key={event.id} event={event} />
    ))
}

export default connect((state) => ({
  events: selectedEventsSelector(state)
}))(SelectedEventsList)

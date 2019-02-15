import React, { Component } from 'react'
import EventsTable from '../../events/virtualized-lazy-table'
import SelectedEventsList from '../../events/selected-events-list'

class EventsPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectedEventsList />
        <EventsTable />
      </div>
    )
  }
}

export default EventsPage

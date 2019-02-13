import React, { Component } from 'react'
import VirtualizedLazyEvents from '../../events/virtualized-lazy-events-table'
import SelectedEventsList from '../../events/selected-events-list'

class EventsPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectedEventsList />
        <VirtualizedLazyEvents />
      </div>
    )
  }
}

export default EventsPage

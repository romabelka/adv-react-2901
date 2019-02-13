import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'react-virtualized'
import { selectedEventsSelector } from '../../ducks/events'
import SelectedEventCard from './selected-event-card'
import 'react-virtualized/styles.css'

class SelectedEventsList extends Component {
  static propTypes = {}

  render() {
    const { events } = this.props

    return (
      <List
        width={400}
        height={200}
        rowCount={events.length}
        rowHeight={100}
        rowRenderer={this.getRow}
      />
    )
  }

  getRow = ({ index, key, style }) => (
    <SelectedEventCard
      key={key}
      event={this.props.events[index]}
      style={style}
    />
  )
}

export default connect((state) => ({
  events: selectedEventsSelector(state)
}))(SelectedEventsList)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchAllEvents,
  toggleSelection,
  eventListSelector,
  loadedSelector,
  loadingSelector
} from '../../ducks/events'
import Loader from '../common/loader'
import EventTableRow from './event-table-row'

export class EventsTable extends Component {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchAllEvents()
  }

  render() {
    if (this.props.loading) return <Loader />
    return (
      <table>
        <tbody>{this.getRows()}</tbody>
      </table>
    )
  }

  getRows = () => this.props.events.map(this.getRow)

  getRow = (event) => (
    <EventTableRow
      key={event.id}
      event={event}
      onClick={this.handleClick(event)}
    />
  )

  handleClick = (event) => () => this.props.toggleSelection(event.id)
}

export default connect(
  (state) => ({
    events: eventListSelector(state),
    loading: loadingSelector(state),
    loaded: loadedSelector(state)
  }),
  { fetchAllEvents, toggleSelection }
)(EventsTable)

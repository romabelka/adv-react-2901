import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Column, InfiniteLoader } from 'react-virtualized'
import {
  fetchAllEvents,
  toggleSelection,
  eventListSelector,
  loadedSelector,
  loadingSelector,
  fetchLazyEvents
} from '../../ducks/events'
import Loader from '../common/loader'
import 'react-virtualized/styles.css'
import { VirtualizedEventsTable } from './virtualized-events-table'

class VirtualizedLazyEvents extends Component {
  componentDidMount() {
    this.props.fetchAllEvents()
  }

  render() {
    const { loading, events } = this.props
    if (loading) return <Loader />

    return (
      <InfiniteLoader
        isRowLoaded={this.getStateRow}
        loadMoreRows={this.getMoreRows}
        rowCount={events.length}
      >
        {({ onRowsRendered, registerChild }) => (
          <VirtualizedEventsTable
            onRowsRendered={onRowsRendered}
            ref={registerChild}
            rowCount={events.length}
            rowGetter={this.rowGetter}
            onRowClick={this.handleClick}
          />
        )}
      </InfiniteLoader>
    )
  }

  getStateRow = ({ index }) => index < this.props.events.length

  getMoreRows = ({ startIndex, stopIndex }) =>
    this.props.fetchLazyEvents(stopIndex)

  rowGetter = ({ index }) => this.props.events[index]

  handleClick = ({ rowData }) => this.props.toggleSelection(rowData.id)
}

export default connect(
  (state) => ({
    events: eventListSelector(state),
    loading: loadingSelector(state),
    loaded: loadedSelector(state)
  }),
  { fetchAllEvents, toggleSelection, fetchLazyEvents }
)(VirtualizedLazyEvents)

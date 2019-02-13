import React, { Component } from 'react'
import { Table, Column } from 'react-virtualized'

export class VirtualizedEventsTable extends Component {
  static propTypes = {}

  render() {
    return (
      <Table
        width={600}
        height={500}
        rowHeight={40}
        headerHeight={60}
        rowClassName="table-events"
        overscanRowCount={5}
        {...this.props}
      >
        <Column dataKey="title" label="Title" width={300} />
        <Column dataKey="where" label="Where" width={300} />
        <Column dataKey="when" label="When" width={300} />
      </Table>
    )
  }
}

import React from 'react'
import Enzyme, { render } from 'enzyme'
import { VirtualizedEventsTable } from './virtualized-events-table'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Virtualized events table', () => {
  it('Should render some columns', () => {
    const countElements = 15
    const container = render(
      <VirtualizedEventsTable
        rowCount={countElements}
        rowGetter={() => {
          return {}
        }}
      />
    )

    expect(container.find('.table-events').length).toEqual(countElements + 1)
  })
})

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PeopleList from '../../people/people-list'

class EventsPage extends Component {
  static propTypes = {}

  render() {
    const { events } = this.props
    return (
      <div>
        {events && (
          <div>
            <ul>
              {events.map((event, id) => (
                <li key={id}>{JSON.stringify(event)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  }
}
export default connect(mapStateToProps)(EventsPage)

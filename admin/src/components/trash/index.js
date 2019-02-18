import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import { connect } from 'react-redux'

import { removeEvent } from '../ducks/events'
import { removePerson } from '../ducks/people'

class Index extends Component {
  static propTypes = {}

  render() {
    const { connectDropTarget, isOver } = this.props
    const style = {
      position: 'fixed',
      width: 120,
      height: 120,
      top: 20,
      right: 20,
      border: `3px solid ${isOver ? 'red' : 'green'}`
    }

    return connectDropTarget(<h1 style={style}>Trash</h1>)
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
})

const spec = {
  drop(props, monitor) {
    const { removeEvent, removePerson } = props
    const { id } = monitor.getItem()
    const type = monitor.getItemType()
    const removeAction = {
      event: removeEvent,
      person: removePerson
    }[type]

    removeAction(id)
  }
}

export default connect(
  null,
  { removeEvent, removePerson }
)(DropTarget(['event', 'person'], spec, collect)(Index))

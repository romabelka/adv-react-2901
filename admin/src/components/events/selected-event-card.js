import React, { Component } from 'react'
import { DropTarget, DragSource } from 'react-dnd'
import { connect } from 'react-redux'
import { addPersonToEvent } from '../../ducks/events'
import { compose } from 'redux'

class SelectedEventCard extends Component {
  static propTypes = {}

  render() {
    const { event, dropTarget, canDrop, isOver } = this.props
    const border = `1px solid ${canDrop ? (isOver ? 'red' : 'green') : 'black'}`
    return dropTarget(
      <div
        style={{
          border,
          width: 400,
          height: 150,
          boxSizing: 'border-box'
        }}
      >
        <h3>{event.title}</h3>
        <h4>{event.where}</h4>
      </div>
    )
  }
}

const specDrop = {
  drop(props, monitor) {
    const { addPersonToEvent, event } = props

    addPersonToEvent(monitor.getItem().id, event.id)
  }
}

const specDrag = {
  beginDrag({ event }) {
    return {
      id: event.id
    }
  }
}

const collectForDrop = (connect, monitor) => ({
  dropTarget: connect.dropTarget(),
  canDrop: monitor.canDrop(),
  isOver: monitor.isOver()
})

const collectForDrag = (connect, monitor) => ({
  dragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  dragPreview: connect.dragPreview()
})

export default compose(
  connect(
    null,
    { addPersonToEvent }
  ),
  DropTarget(['person'], specDrop, collectForDrop),
  DragSource('event', specDrag, collectForDrag)
)(SelectedEventCard)

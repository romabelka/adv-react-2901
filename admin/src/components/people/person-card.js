import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import DragPreview from './person-drag-preview'

class PersonCard extends Component {
  static propTypes = {}

  componentDidMount() {
    this.props.dragPreview(getEmptyImage())
  }

  render() {
    const { person, dragSource, isDragging } = this.props
    const style = {
      opacity: isDragging ? 0.3 : 1
    }
    return dragSource(
      <div style={style}>
        <h3>{person.email}</h3>
        <section>{person.firstName}</section>
      </div>
    )
  }
}

const spec = {
  beginDrag(props) {
    return {
      id: props.person.id,
      DragPreview
    }
  }
}

const collect = (connect, monitor) => ({
  dragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  dragPreview: connect.dragPreview()
})

export default DragSource('person', spec, collect)(PersonCard)

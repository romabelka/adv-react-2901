import React, { Component } from 'react'
import {View} from 'react-native'
import EventCard from './event-card'

class EventList extends Component {
    static propTypes = {

    };

    render() {
        return (
            <View>
                {this.props.events.map(event => <EventCard key={event.id} event={event}/>)}
            </View>
        )
    }
}

export default EventList

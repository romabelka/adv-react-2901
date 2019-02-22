import React, { Component } from 'react'
import {ScrollView, FlatList} from 'react-native'
import EventCard from './event-card'

class EventList extends Component {
    static propTypes = {

    };

    renderItem = ({ item }) => <EventCard event={item} />
    keyExtractor = (item) => item.id

    render() {
        return (
            <FlatList
                data = {this.props.events}
                renderItem = {this.renderItem}
                keyExtractor = {this.keyExtractor}
            />
        )
/*
        return (
            <ScrollView>
                {this.props.events.map(event => <EventCard key={event.id} event={event}/>)}
            </ScrollView>
        )
*/
    }
}

export default EventList

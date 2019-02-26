import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import EventList from '../events/event-list'
import {events} from '../../fixtures'

const eventList = Object.entries(events).map(([ id, value ]) => ({ id, ...value }))

class EventListScreen extends Component {
    static navigationOptions = {
        title: 'Events'
    }

    static propTypes = {

    };

    render() {
        return <EventList events = {eventList} handlePress = {this.goToEvent}/>
    }

    goToEvent = event => this.props.navigation.navigate('event', { id: event.id })
}

const styles = StyleSheet.create({
})

export default EventListScreen

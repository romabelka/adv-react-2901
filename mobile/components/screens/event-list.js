import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import EventList from '../events/event-list'

@inject('events') @observer
class EventListScreen extends Component {
    static navigationOptions = {
        title: 'Event List'
    }

    componentDidMount() {
        this.props.events.checkAndLoadAll()
    }

    render() {
        const {events} = this.props
        if (events.loading) return this.loader
        return <EventList events = {events.list} handlePress = {this.goToEvent}/>
    }

    get loader() {
        return <View><ActivityIndicator size='large'/></View>
    }

    goToEvent = event => this.props.navigation.navigate('event', { id: event.id })
}

const styles = StyleSheet.create({
})

export default EventListScreen

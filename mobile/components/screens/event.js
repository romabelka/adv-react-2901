import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import Event from '../events/event'
import {events} from '../../fixtures'

const eventList = Object.entries(events).map(([ id, value ]) => ({ id, ...value }))

class EventScreen extends Component {
    static propTypes = {

    };

    render() {
        return <Event event = {eventList[0]}/>
    }
}

const styles = StyleSheet.create({
})

export default EventScreen

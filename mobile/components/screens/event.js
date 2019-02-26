import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import Event from '../events/event'
import {events} from '../../fixtures'

class EventScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.id
    })

    render() {
        const { id } = this.props.navigation.state.params
        const event = { id, ...events[id] }
        return <Event event = {event}/>
    }
}

const styles = StyleSheet.create({
})

export default EventScreen

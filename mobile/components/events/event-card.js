import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'

class EventCard extends Component {
    static propTypes = {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {this.props.event.title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10
    }
})

export default EventCard

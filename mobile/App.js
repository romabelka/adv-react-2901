import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import HelloWorld from "./components/hello-world";
import Auth from './components/auth'
import EventList from "./components/events/event-list";
import {events} from './fixtures'

const eventList = Object.entries(events).map(([ id, value ]) => ({ id, ...value }))

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <EventList events={eventList}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

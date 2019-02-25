import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import HelloWorld from "./components/hello-world";
import Auth from "./components/auth";
import EventList from "./components/events/event-list";
import EventSectionList from "./components/events/event-section-list";
import { events } from "./fixtures";

const eventList = Object.entries(events).map(([id, value]) => ({
  id,
  ...value
}));

const eventsBySection = {};
Object.entries(events).forEach(([id, value]) => {
  const firstLetter = value.title.charAt(0);
  if (!eventsBySection[firstLetter]) eventsBySection[firstLetter] = [];
  eventsBySection[firstLetter].push({ id, ...value });
});
const sections = Object.entries(eventsBySection).map(([id, value]) => ({
  title: id,
  data: value.sort((a, b) => a.title > b.title)
}));

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <EventList events={eventList} /> */}
        <EventSectionList sections={sections} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 24
    // alignItems: "center",
    // justifyContent: "center"
  }
});

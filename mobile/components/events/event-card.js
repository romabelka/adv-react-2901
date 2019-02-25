import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

class EventCard extends Component {
  static propTypes = {};

  handleDelete = () => this.props.onDelete(this.props.event.id);

  render() {
    const { event } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.details}>{event.where}</Text>
        </View>
        <TouchableHighlight onPress={this.handleDelete} underlayColor="orange">
          <View
            style={styles.deleteButtonContainer}
            onPress={this.handleDelete}
          >
            <Text style={styles.deleteButtonText}>&times;</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    backgroundColor: "aliceblue",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
    padding: 6
  },
  title: {
    fontSize: 12
  },
  details: {
    fontSize: 10,
    color: "#808080"
  },
  deleteButtonContainer: {
    elevation: 1,
    width: 28,
    backgroundColor: "skyblue",
    borderWidth: 0.3,
    borderRadius: 2,
    borderColor: "steelblue",
    alignItems: "center"
  },
  deleteButtonText: {
    fontSize: 20,
    color: "#eceff1"
  }
});

export default EventCard;

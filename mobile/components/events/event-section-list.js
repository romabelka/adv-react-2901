import React, { Component } from "react";
import { View, SectionList, Text, Alert } from "react-native";
import EventCard from "./event-card";
import Confirmation from "./confirmation";

class EventSectionList extends Component {
  static propTypes = {};

  state = {
    confirmationVisible: false,
    eventToDelete: null
  };

  hideConfirmation = () =>
    this.setState({ confirmationVisible: false, eventToDelete: null });

  handleDelete = (id) => {
    this.setState({ confirmationVisible: true, eventToDelete: id });
  };

  doDelete = () => {
    if (!this.state.eventToDelete) return;
    console.log(`delete event ${this.state.eventToDelete}`);
    this.hideConfirmation();
  };

  renderItem = ({ item, index }) => (
    <EventCard key={item.id} event={item} onDelete={this.handleDelete} />
  );
  keyExtractor = (item, index) => item.id + "_" + index;

  render() {
    return (
      <View>
        <Confirmation
          visible={this.state.confirmationVisible}
          onOk={this.doDelete}
          onCancel={this.hideConfirmation}
        />
        <SectionList
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          )}
          sections={this.props.sections}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default EventSectionList;

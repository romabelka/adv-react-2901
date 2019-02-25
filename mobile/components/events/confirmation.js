import React, { Component } from "react";
import { Modal, View, Text, StyleSheet, Button } from "react-native";

class Confirmation extends Component {
  static propTypes = {};

  render() {
    const { onOk, onCancel } = this.props;

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.visible}
          onRequestClose={onCancel}
        >
          <View style={styles.overlay}>
            <View style={styles.dialog}>
              <View style={styles.text}>
                <Text>Are you sure?</Text>
              </View>
              <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                  <Button title="Yes" onPress={onOk} />
                </View>
                <View style={styles.button}>
                  <Button title="No" onPress={onCancel} color="silver" />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    justifyContent: "center",
    padding: 10
  },
  dialog: { backgroundColor: "#fff", padding: 20, borderRadius: 2 },
  text: {
    alignItems: "center",
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: 60
  }
});

export default Confirmation;

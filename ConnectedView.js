import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

const ConnectedView = (props) => {
  const { sendData } = props;

  const onPressButton = async (buttonNumber, isOn) => {
    // B011 - button 1 on | B010 - button 1 off
    sendData("B01" + (isOn ? "1" : "0"));
  };

  /*
    // packets used by ossw watch code
    #define PACKET_ACC_LEN                  (15) // A1...5....0...4
    #define PACKET_GYRO_LEN                 (15) // G1...5....0...4
    #define PACKET_MAG_LEN                  (15) // M1...5....0...4
    #define PACKET_QUAT_LEN                 (19) // Q1...5....0....5..8
    #define PACKET_BUTTON_LEN               (5) // B1..4
    #define PACKET_COLOR_LEN                (6) // C1...5
    #define PACKET_LOCATION_LEN             (15) // L1...5....0...4
  */

  return (
    <>
      <Text style={styles.heartRateTitleText}>Connected</Text>

      <Pressable
        onPressIn={() => onPressButton(1, true)}
        onPressOut={() => onPressButton(1, false)}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "red" : "pink" },
          styles.ctaButton,
        ]}
      >
        <Text>Button 1</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  heartRateTitleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heartRateTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
    color: "black",
  },
  heartRateText: {
    fontSize: 25,
    marginTop: 15,
  },
  ctaButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default ConnectedView;

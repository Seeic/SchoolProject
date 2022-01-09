import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Chatting() {
  return (
    <View style={styles.main}>
      <Text>Chatting</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignContent: "center",
  },
});

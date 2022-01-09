import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Board() {
  console.log("Board");
  return (
    <View style={styles.main}>
      <Text>Board</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.main}>
      <Text>Profile</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignContent: "center",
  },
});

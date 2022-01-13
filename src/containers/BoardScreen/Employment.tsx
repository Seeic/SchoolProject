import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";

const Employment = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Employment</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Employment;

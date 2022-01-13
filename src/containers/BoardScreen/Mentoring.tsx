import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";

const Mentoring = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Mentoring</Text>
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
export default Mentoring;

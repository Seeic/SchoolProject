import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ViewContainersProps } from "types/components";

export default function ViewContainers({ title }: ViewContainersProps) {
  return (
    <View style={styles.containers}>
      <Text style={styles.title}>{title}</Text>
      <TextInput></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
  },
});

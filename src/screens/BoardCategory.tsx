import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function BoardCategory() {
  const PageNavigation = () => {
    console.log("page move");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={PageNavigation}>
        <Text style={styles.title}>스터디</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={PageNavigation}>
        <Text style={styles.title}>프로젝트 모집</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={PageNavigation}>
        <Text style={styles.title}>멘토링</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={PageNavigation}>
        <Text style={styles.title}>취업정보공유</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={PageNavigation}>
        <Text style={styles.title}>학교정보 공유</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={PageNavigation}>
        <Text style={styles.title}>책나눔</Text>
      </TouchableOpacity>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#ADD8E6",
  },
  touch: {
    borderWidth: 1,
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
});

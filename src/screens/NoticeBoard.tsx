import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

function NoticeBoard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        NoticeBoard 스터디 / 프로젝트모집 / 멘토링 / 취업정보공유 / 학교정보공유
        / 책나눔
      </Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default NoticeBoard;

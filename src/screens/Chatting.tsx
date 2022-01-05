import React from "react";
import { Text, View, StyleSheet } from "react-native";

/* 
  firebase 를 통하여 nosql로 사용자와 실시간으로 채팅을 해야하기에 
  key를 생성하여 key가 맞는 유저한테 메시지를 보내는 방식으로 진행

*/
function Chatting() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chatting 1대1 채팅, 그룹채팅</Text>
      <View style={styles.separator} />
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

export default Chatting;

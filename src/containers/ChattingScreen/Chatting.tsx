import { backgroundColors } from "constant/Colors";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TokenService from "services/TokenService";

export default function Chatting() {
  const [token, setToken] = useState<Promise<string>>();
  useEffect(() => {
    setToken(TokenService.get());
    console.log(token);
  }, []);
  return (
    <View style={styles.main}>
      <Text style={styles.my}>A씨</Text>
      <Text></Text>
      <Text style={styles.you}>B씨</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: backgroundColors,
  },
  my: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: "3%",
  },
  you: {
    marginLeft: "85%",
  },
});

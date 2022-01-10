import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { boardRequest } from "services/Request";

type BoardProps = {
  title: string;
  content: string;
};
// { title, content }: BoardProps
export default function Board(props: any) {
  useEffect(() => {
    // boardRequest(title);
    console.log(props);
  }, []);
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

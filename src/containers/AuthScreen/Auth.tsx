import { useNavigation } from "@react-navigation/native";
import Signin from "containers/SigninScreen/Signin";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSetRecoilState } from "recoil";
// import { authState } from "RecoilStates/AuthState";
import { RootNavigationParams } from "types/NavigationType";

export default function Auth() {
  return (
    <View style={styles.main}>
      <Signin />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
  },
});

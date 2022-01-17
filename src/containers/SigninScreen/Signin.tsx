import React, { ReactNode, useRef, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  TextInputState,
  TextInputComponent,
} from "react-native";
import { RootNavigationParams } from "types/NavigationType";
import { useRecoilState } from "recoil";
import { authState } from "RecoilStates/AuthState";
import { useNavigation } from "@react-navigation/native";
import { authRequest } from "services/BoardService";
import { backgroundColors } from "constant/Colors";

const Signin: React.FC = () => {
  const idRef = useRef<TextInput>(null);
  const pwdRef = useRef<TextInput>(null);
  const navigation = useNavigation<RootNavigationParams>();
  const [auth, setAuth] = useRecoilState(authState);
  const [id, ChangeId] = useState("");
  const [password, ChangePwd] = useState("");
  const onLoginSubmit = () => {
    // {
    //   inputId.length === 8 ? undefined : idRef.current?.focus();
    // }
    // {
    //   inputPwd.length <= 7 ? undefined : pwdRef.current?.focus();
    // }
    authRequest();
    console.log("ghgh");
    setAuth((state) => !state);
    navigation.navigate("SimpleBoard");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        ref={idRef}
        onChangeText={ChangeId}
        onBlur={() => console.log("ddd")}
        autoFocus={true}
        maxLength={8}
        keyboardType="number-pad"
        placeholder="학번"
      />
      <TextInput
        style={styles.input}
        ref={pwdRef}
        blurOnSubmit={true}
        onChangeText={ChangePwd}
        secureTextEntry={true}
        keyboardType="number-pad"
        placeholder="Password"
      />

      <TouchableOpacity onPress={onLoginSubmit} style={styles.btn}>
        <Text>로그인</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColors,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    marginBottom: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: "50%",
    height: "9%",
  },
  btn: {
    borderRadius: 20,
    backgroundColor: "#E0FFFF",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    height: "10%",
  },
});

export default Signin;

import React from "react";
import { useCallback } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import Signin from "../screens/Signin";
import { login as loginSagaStart } from "../redux/auth";
import { SigninNavigation } from "types";
export default function SigninContainer({ navigation }: SigninNavigation) {
  const dispatch = useDispatch();
  const login = useCallback(
    (reqData) => {
      dispatch(loginSagaStart(reqData));
    },
    [dispatch]
  );
  console.log(navigation);
  return <Signin login={login} navigation={navigation} />;
}

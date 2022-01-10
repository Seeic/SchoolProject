import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import React from "react";
import LinkingConfiguration from "navigation/LinkingConfiguration";
import { ColorSchemeName } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootStackParamList } from "types/NavigationType";
import Auth from "containers/AuthScreen/Auth";
import Board from "containers/BoardScreen/Board";
import MainNavigation from "./MainNavigation";
import { useRecoilValue } from "recoil";
import { authState } from "RecoilStates/AuthState";
import SimpleBoard from "containers/BoardScreen/SimpleBoard";

const Drawer = createDrawerNavigator<RootStackParamList>();

function RootNavigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const auth = useRecoilValue(authState);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {auth ? (
        <Drawer.Navigator
          initialRouteName="Main"
          screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen component={MainNavigation} name="Main" />
          <Drawer.Screen component={Auth} name="Auth" />
          <Drawer.Screen component={Board} name="Study" />
          <Drawer.Screen component={Board} name="Project" />
          <Drawer.Screen component={Board} name="Mentoring" />
          <Drawer.Screen component={Board} name="Employment" />
          <Drawer.Screen component={Board} name="Information" />
          <Drawer.Screen component={Board} name="BookSharing" />
        </Drawer.Navigator>
      ) : (
        <Drawer.Navigator
          initialRouteName="Auth"
          screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen component={Auth} name="Auth" />
          <Drawer.Screen component={SimpleBoard} name="SimpleBoard" />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

export default RootNavigation;

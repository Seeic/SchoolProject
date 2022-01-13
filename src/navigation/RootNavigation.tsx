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
import MainNavigation from "./MainNavigation";
import { useRecoilValue } from "recoil";
import { authState } from "RecoilStates/AuthState";
import {
  SimpleBoard,
  Study,
  Project,
  Mentoring,
  Employment,
  Information,
  BookSharing,
} from "containers/BoardScreen";

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
          <Drawer.Screen component={Study} name="Study" />
          <Drawer.Screen component={Project} name="Project" />
          <Drawer.Screen component={Mentoring} name="Mentoring" />
          <Drawer.Screen component={Employment} name="Employment" />
          <Drawer.Screen component={Information} name="Information" />
          <Drawer.Screen component={BookSharing} name="BookSharing" />
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

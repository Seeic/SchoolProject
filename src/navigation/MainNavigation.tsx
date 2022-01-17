import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useColorScheme from "hooks/useColorScheme";
import { Keyboard, Pressable } from "react-native";
import { MainTabParamList, RootTabScreenProps } from "types/NavigationType";
import Signin from "containers/SigninScreen/Signin";
import SimpleBoard from "containers/BoardScreen/SimpleBoard";
import Profile from "containers/ProfileScreen/Profile";
import Chatting from "containers/ChattingScreen/Chatting";
const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

const Colors = {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

const BottomTab = createBottomTabNavigator<MainTabParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

function MainNavigation() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="SimpleBoard"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="SimpleBoard"
        component={SimpleBoard}
        options={({ navigation }: RootTabScreenProps<"SimpleBoard">) => ({
          title: "게시판",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Chatting"
        component={Chatting}
        options={{
          title: "채팅",
          tabBarIcon: ({ color }) => <TabBarIcon name="wechat" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="wechat" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default MainNavigation;

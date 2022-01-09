/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types/NavigationType";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Study: "Study",
      Project: "Project",
      Mentoring: "Mentoring",
      Employment: "Employment",
      Information: "Information",
      BookSharing: "undefined",
      Auth: "Auth",
      Main: {
        screens: {
          Chatting: "Chatting",
          Profile: "Profile",
          SimpleBoard: "SimpleBoard",
        },
      },
    },
  },
};

export default linking;

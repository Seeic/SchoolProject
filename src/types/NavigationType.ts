import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Study: undefined;
  Project: undefined;
  Mentoring: undefined;
  Employment: undefined;
  Information: undefined;
  BookSharing: undefined;
  SimpleBoard: undefined; // simpleBoard 가 중복되서 이것을 해결해야함
  Auth: undefined;
  Main: NavigatorScreenParams<MainTabParamList> | undefined;
};

export type MainTabParamList = {
  Chatting: undefined;
  Profile: undefined;
  SimpleBoard: undefined;
};

export type RootNavigationParams =
  NativeStackNavigationProp<RootStackParamList>;

export type MainNavigationParams = NativeStackNavigationProp<MainTabParamList>;

export type BoardProps = NativeStackScreenProps<
  MainTabParamList,
  "SimpleBoard"
>;

export type RootTabScreenProps<Screen extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type ProfileNavigation = NativeStackScreenProps<
  MainTabParamList,
  "Profile"
>;

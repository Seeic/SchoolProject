import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  BoardList: undefined;
};

export type BoardProps = NativeStackScreenProps<RootTabParamList, "Board">;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Board: undefined;
  Chatting: undefined;
  Profile: undefined;
  Signin: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type SigninNavigation = NativeStackScreenProps<
  RootTabParamList,
  "Signin"
>;

export type SinginType = {
  id: string;
  password: string;
};

export interface AuthState {
  token: Promise<string> | string | null;
  loading: boolean;
  error: Error | null;
}

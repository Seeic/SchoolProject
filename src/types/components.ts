import { TextInputProps } from "react-native";

export type SigninInputProps = Omit<TextInputProps, "onChangeText"> & {
  name: string;
  onChangeText: (text: string, name: string) => void;
  onBlur?: (name: string) => void;
};

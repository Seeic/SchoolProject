import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { SigninInputProps } from "types/components";

const SigninInput = ({
  onChangeText,
  name,
  onBlur,
  ...restProps
}: SigninInputProps) => {
  return (
    <View>
      <TextInput
        {...restProps}
        style={styles.input}
        onChangeText={(text) => {
          onChangeText && onChangeText(text, name);
        }}
        onBlur={() => onBlur && onBlur(name)}
        keyboardType="number-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    marginBottom: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: "50%",
    height: "9%",
  },
});
export default SigninInput;

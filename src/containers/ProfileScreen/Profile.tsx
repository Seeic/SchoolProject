import { backgroundColors, ghostWhiteColors } from "constant/Colors";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

export default function Profile() {
  const [name, ChangeName] = useState("");

  const [number, ChangeNumber] = useState("");
  const [age, ChangeAge] = useState("");
  const [Specialty, ChangeSpecialty] = useState("");
  const [career, ChangeCareer] = useState("");
  const [email, ChangeEmail] = useState("");
  return (
    <View style={styles.main}>
      {/* <Image source={{ uri: "" }} /> */}

      <View style={styles.containers}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={ChangeName}
          placeholder="이름"
          returnKeyType="send"
          editable={false}
        />
      </View>
      <View style={styles.containers}>
        <TextInput
          style={styles.input}
          value={Specialty}
          onChangeText={ChangeSpecialty}
          placeholder="분야"
          returnKeyType="send"
          editable={false}
        />
      </View>
      <View style={styles.containers}>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={ChangeNumber}
          placeholder="전화번호"
          returnKeyType="send"
          editable={false}
        />
      </View>
      <View style={styles.containers}>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={ChangeAge}
          placeholder="나이"
          returnKeyType="send"
          editable={false}
        />
      </View>
      <View style={styles.containers}>
        <TextInput
          style={styles.input}
          value={career}
          onChangeText={ChangeCareer}
          placeholder="경력"
          returnKeyType="send"
          editable={false}
        />
      </View>
      <View style={styles.containers}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={ChangeEmail}
          placeholder="Email"
          returnKeyType="send"
          editable={false}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColors,
    flex: 1,
  },
  containers: {
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignContent: "center",
    justifyContent: "center",
    width: "70%",
    backgroundColor: ghostWhiteColors,
  },
  input: {
    height: 40,
    width: 100,
    // margin: 12,

    // padding: 10,
  },
});

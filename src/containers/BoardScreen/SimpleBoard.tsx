import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { boardRequest } from "services/Request";

// react-navigation 을 통하여 화면 이동을 하는 interface

const DATA = [
  {
    title: "스터디",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "프로젝트모집",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "멘토링",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "취업정보공유",
    data: ["취업정보", "이직 정보"],
  },
  {
    title: "학교정보공유",
    data: ["꿀팁", "어떤꿀팁?"],
  },
  {
    title: "책나눔",
    data: ["C++", "React"],
  },
];
type ItemType = {
  title: string;
};

const Item = ({ title }: ItemType) => (
  <View style={styles.item}>
    <TouchableOpacity
      onPressOut={(title) => {
        console.log(`이걸 어떻게 navigation을 전달할까?...${title.type}`);
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const SimpleBoard = () => {
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <TouchableOpacity
            onPress={() => {
              // async () => {
              // const result = await boardRequest("auth");
              // console.log(`result${result}`);
              console.log("이동");
            }}
          >
            <Text style={styles.header}>{title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#FFFAFA",

    borderRadius: 3,
    borderWidth: 0.7,
  },
  header: {
    fontSize: 32,
    color: "black",
    marginTop: 15,
    backgroundColor: "#F6D8CE",
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
});

export default SimpleBoard;

import { useNavigation } from "@react-navigation/native";
import { backgroundColors } from "constant/Colors";
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
import { simpleBoardRequest } from "services/BoardService";

const DATA = [
  {
    title: "Study",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Project",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Mentoring",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Employment",
    data: ["취업정보", "이직 정보"],
  },
  {
    title: "Information",
    data: ["꿀팁", "어떤꿀팁?"],
  },
  {
    title: "BookSharing",
    data: ["C++", "Reac?"],
  },
  {
    title: "BookSharing",
    data: ["C++", "React"],
  },
];
type ItemType = {
  title: string;
  section: section;
};
type section = {
  data: string[];
  title: string;
};

const Item = ({ title, section }: ItemType) => (
  <View style={styles.item}>
    <TouchableOpacity
      onPressOut={() => {
        console.log(section); // title인 게시판 이름이 들어가있음
        console.log(title); // 게시판에 어떤 데이터가 있는지 확인
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const SimpleBoard = () => {
  const navigation = useNavigation();
  useEffect(() => {
    simpleBoardRequest()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, section }) => (
          <Item title={item} section={section} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TouchableOpacity
            onPress={() => {
              // async () => {
              // const result = await boardRequest("auth");
              // console.log(`result${result}`);
              title === "Employment" ? navigation.navigate("Employment") : null;
              title === "Study" ? navigation.navigate("Study") : null;
              title === "Mentoring" ? navigation.navigate("Mentoring") : null;
              title === "Information"
                ? navigation.navigate("Information")
                : null;
              title === "BookSharing"
                ? navigation.navigate("BookSharing")
                : null;
              title === "Project" ? navigation.navigate("Project") : null;
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
    backgroundColor: backgroundColors,
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

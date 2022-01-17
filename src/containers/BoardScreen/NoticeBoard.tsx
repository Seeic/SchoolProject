import { useRoute } from "@react-navigation/native";
import { backgroundColors } from "constant/Colors";
import React, { useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
import { useRecoilStateLoadable, useRecoilValueLoadable } from "recoil";
import { getBoardInfo } from "RecoilStates/BoardState";

type boardType = {
  title: string;
  contents: string;
  writer: string;
  time: string;
  comment: string;
};
// 게시판의 정보들을
export default function NoticeBoard() {
  const routes = useRoute();
  const [boardInfoLoadable, refetchBoardInfo] =
    useRecoilStateLoadable(getBoardInfo);
  if (boardInfoLoadable.state === "hasValue") console.log(boardInfoLoadable);
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.header}>{routes.name} 게시판</Text>
      <Text style={styles.board}>
        {/* {boardInfoLoadable.state === "hasValue"
          ? boardInfoLoadable.contents
          : undefined} */}
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: backgroundColors,
  },
  header: {
    fontSize: 28,
    paddingLeft: 10,
    borderBottomWidth: 5,
    borderColor: "white",
  },
  board: {
    fontSize: 12,
  },
});

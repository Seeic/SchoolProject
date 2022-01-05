import React, { useState } from "react";
import { Button, Image, ScrollView, TextInput } from "react-native";

/*
    redux를 이용하여 전역state 관리를 할 수 있도록 진행한다.
    state를 전역 에서 관리해서 navigation/index.tsx 에서 
    Login Navigation.bottom 을 보일지 Profile Navigation.bottom 을 보일지 만들어야 한다.
*/

function Profile() {
  let nameUpdate: boolean = true;
  const [name, setName] = useState("");
  const onChangeOcrImage = () => {};

  return (
    <ScrollView>
      <TextInput editable={nameUpdate}>{name}</TextInput>
      <Button
        title="수정"
        onPress={() => {
          nameUpdate = false;
        }}
      ></Button>
    </ScrollView>
  );
}

export default Profile;

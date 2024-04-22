import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";

const CommentScreen = () => {
  //Logics
  const navigation = useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  //Views
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>CommentScreen</Text>
    </View>
  );
};

export default CommentScreen;

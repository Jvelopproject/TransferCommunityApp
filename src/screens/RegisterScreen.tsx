
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";
import Checkbox from "expo-checkbox";
import React, { useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RegisterScreen = () => {
  // Logics
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  const [nickname, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [visible, setVisible] = useState(true);

  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  const handleEmailSubmit = () => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  };

  const handlePasswordSubmit = () => {
    if (pwdRef.current) {
      pwdRef.current.focus();
    }
  };

  const Register = async () => {
    try {
      await axios
        .post("/api/auth/signup", {
          nickname,
          email,
          pwd,
          isChecked,
        })
        .then((res) => {
          console.log("data: ", res);
          navigation.navigate("Login");
        });
    } catch (error) {
      console.log("Login error: ");
    }
  };

  // Views
  return (
    // 전체 레이아웃
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 30,
      }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
      extraHeight={300}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      {/* 텍스트 인풋 레이아웃 */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: 30,
        }}
      >
        {/* 닉네임 인풋 레이아웃 */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: 60,
            borderRadius: 15,
            padding: 15,
            backgroundColor: "#e5e5e5",
            marginBottom: 7.5,
          }}
        >
          <TextInput
            placeholder="닉네임"
            onChangeText={(text) => setNickName(text)}
            value={nickname}
            onSubmitEditing={handleEmailSubmit}
            returnKeyType="next"
            style={{ flex: 1 }}
          />
          <TouchableOpacity onPress={() => setNickName("")}>
            <Image
              source={require("../assets/images/Auth/closecircle.png")}
              style={{ width: 24, height: 24, marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>

        {/* 이메일 인풋 레이아웃 */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: 60,
            borderRadius: 15,
            padding: 15,
            backgroundColor: "#e5e5e5",
            marginTop: 7.5,
            marginBottom: 7.5,
          }}
        >
          <TextInput
            placeholder="이메일"
            onChangeText={(text) => setEmail(text)}
            value={email}
            ref={emailRef}
            onSubmitEditing={handlePasswordSubmit}
            returnKeyType="next"
            style={{ flex: 1 }}
          />
          <TouchableOpacity onPress={() => setEmail("")}>
            <Image
              source={require("../assets/images/Auth/closecircle.png")}
              style={{ width: 24, height: 24, marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>

        {/* 비밀번호 인풋 레이아웃 */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: 60,
            borderRadius: 15,
            padding: 15,
            backgroundColor: "#e5e5e5",
            marginTop: 7.5,
          }}
        >
          <TextInput
            placeholder="비밀번호"
            onChangeText={(text) => setPwd(text)}
            value={pwd}
            ref={pwdRef}
            secureTextEntry={visible}
            onSubmitEditing={Register}
            style={{ flex: 1 }}
          />
          {visible ? (
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Image
                source={require("../assets/images/Auth/visible.png")}
                style={{ width: 24, height: 24, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Image
                source={require("../assets/images/Auth/invisible.png")}
                style={{ width: 24, height: 24, marginLeft: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* 체크박스 레이아웃 */}
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 15,
          }}
        >
          <Checkbox
            value={isChecked}
            onValueChange={() => setIsChecked(!isChecked)}
            style={{borderRadius: 4}}
            disabled={false}
          />
          <Text style={{ marginLeft: 5 }}>학원 관리자</Text>
        </View>
      </View>

      {/* 버튼 레이아웃 */}
      <View
        style={{
          width: "100%",
          height: 60,
          backgroundColor: "#2978f4",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          marginTop: 30,
        }}
      >
        <TouchableOpacity>
          <Text style={{ color: "white", fontSize: 16 }}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  appLogo: {
    width: 80,
    height: 100,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
  appLogoTitle: {
    margin: 20,
  },
  nicknameTextInputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
  emailTextInputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
  },
  pwdTextInputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 15,
    padding: 15,
  },
  loginButton: {
    marginTop: 35,
    width: "100%",
    height: 60,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});

export default RegisterScreen;

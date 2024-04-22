import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import axios from "axios";
import { useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = () => {
  // Logics
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [visible, setVisible] = useState(true);

  const inputRef = useRef(null);

  const handleEmailSubmit = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const Login = async () => {
    try {
      const response = await axios
        .get()
        .then(() => navigation.navigate("Tabs"));
    } catch (error) {}
  };

  // Views
  return (
    // 전체 레이아웃
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 30,
      }}
    >
      {/* 텍스트 인풋 레이아웃 */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: 30
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: 60,
            borderWidth: 1,
            borderRadius: 15,
            padding: 15,
          }}
        >
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            onSubmitEditing={handleEmailSubmit}
            returnKeyType="next"
          />

          <TouchableOpacity onPress={() => setEmail("")}>
            <Image
              source={require("../public/images/Auth/closecircle.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: 60,
            borderWidth: 1,
            marginTop: 15,
            borderRadius: 15,
            padding: 15,
          }}
        >
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPwd(text)}
            value={pwd}
            ref={inputRef}
            secureTextEntry={visible}
            onSubmitEditing={Login}
            returnKeyType="done"
          />

          {visible ? (
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Image
                source={require("../public/images/Auth/visible.png")}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Image
                source={require("../public/images/Auth/invisible.png")}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* 버튼 레이아웃 */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: 30,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 60,
            backgroundColor: "#D9D9D9",
            borderRadius: 15,
            marginBottom: 5,
          }}
        >
          <TouchableOpacity>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 60,
            backgroundColor: "#D9D9D9",
            borderRadius: 15,
            marginTop: 5,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
            <Text>비회원으로 입장</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 회원가입 버튼 레이아웃 */}
      <View style={{ display: "flex", alignSelf: "flex-end", marginTop: 5 }}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  emailTextInputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 110,
    width: "100%",
    height: 60,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
  },
  registerButton: {
    display: "flex",
    alignSelf: "flex-end",
    marginTop: 15,
  },
});

export default LoginScreen;

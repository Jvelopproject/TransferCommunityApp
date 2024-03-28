import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import axios from "axios";
import React, { useRef, useState } from "react";
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
  const navigation = useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [visible, setVisible] = useState(true);

  const inputRef = useRef(null);

  const handleEmailSubmit = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const Login = () => {
    try {
      const response = axios;
    } catch (error) {}
  };

  // Views
  return (
    <View style={styles.container}>
      <View style={styles.appLogo}>
        <Text>App Logo</Text>
      </View>
      <View style={styles.appLogoTitle}>
        <Text>App Logo Name</Text>
      </View>
      <View style={styles.emailTextInputWrapper}>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          onSubmitEditing={handleEmailSubmit}
          returnKeyType="next"
        />
        <TouchableOpacity onPress={() => setEmail("")}>
          <Image
            source={require("../public/images/closecircle.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.pwdTextInputWrapper}>
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
              source={require("../public/images/visible.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Image
              source={require("../public/images/invisible.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.loginButton}>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text>Register</Text>
      </TouchableOpacity>
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

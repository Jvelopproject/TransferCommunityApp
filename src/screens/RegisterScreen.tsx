import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
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

const RegisterScreen = () => {
  // Logics
  const navigation = useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  const [nickname, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
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

  const Register = () => {
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
      <View style={styles.nicknameTextInputWrapper}>
        <TextInput
          placeholder="NickName"
          onChangeText={(text) => setNickName(text)}
          value={nickname}
          onSubmitEditing={handleEmailSubmit}
          returnKeyType="next"
        />
        <TouchableOpacity onPress={() => setNickName("")}>
          <Image
            source={require("../public/images/Auth/closecircle.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.emailTextInputWrapper}>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          ref={emailRef}
          onSubmitEditing={handlePasswordSubmit}
          returnKeyType="next"
        />
        <TouchableOpacity onPress={() => setEmail("")}>
          <Image
            source={require("../public/images/Auth/closecircle.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.pwdTextInputWrapper}>
        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPwd(text)}
          value={pwd}
          ref={pwdRef}
          secureTextEntry={visible}
          onSubmitEditing={Register}
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

      <View style={styles.loginButton}>
        <TouchableOpacity>
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

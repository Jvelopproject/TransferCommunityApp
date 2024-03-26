import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useRef, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const RegisterScreen = () => {
  // Logics
  const navigation = useNavigation();

  const [nickname, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

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
      </View>

      <View style={styles.pwdTextInputWrapper}>
        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPwd(text)}
          value={pwd}
          ref={pwdRef}
          secureTextEntry={true}
          onSubmitEditing={Register}
        />
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
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    padding: 15,
  },
  emailTextInputWrapper: {
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    padding: 15,
    marginTop: 15,
  },
  pwdTextInputWrapper: {
    width: "100%",
    height: 60,
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 15,
    justifyContent: "center",
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

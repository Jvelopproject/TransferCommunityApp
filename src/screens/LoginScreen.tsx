import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useRef, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const LoginScreen = () => {
  // Logics
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

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
        </View>

        <View style={styles.pwdTextInputWrapper}>
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPwd(text)}
            value={pwd}
            ref={inputRef}
            secureTextEntry={true}
            onSubmitEditing={Login}
            returnKeyType="done"
          />
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
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    padding: 15,
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
    marginTop: 110,
    width: "100%",
    height: 60,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  registerButton: {
    display: "flex",
    alignSelf: "flex-end",
    marginTop: 15,
  },
});

export default LoginScreen;

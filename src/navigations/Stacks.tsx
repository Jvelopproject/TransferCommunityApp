import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { Tabs } from './Tabs';

const Stack = createNativeStackNavigator<ROOT_NAVIGATION>();

export const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="Comment"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

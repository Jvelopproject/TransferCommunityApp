import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Stacks } from './src/navigations/Stacks';

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

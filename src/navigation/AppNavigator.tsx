import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Stacks } from './Stacks';


const Stack = createNativeStackNavigator<ROOT_NAVIGATION>();

export const AppNavigator = () => {
    return (
      <Stacks/>
      );
}

export default AppNavigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StackNavigator } from './StackNavigator';

const Stack = createNativeStackNavigator<ROOT_NAVIGATION>();

export const AppNavigator = () => {
    return <StackNavigator />;
}

export default AppNavigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ChatListScreen from '../screens/ChatListScreen';
import CommentScreen from '../screens/CommentScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import SummaryScreen from '../screens/SummaryScreen';

const Tab = createBottomTabNavigator<ROOT_NAVIGATION>();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Comment" component={CommentScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="ChatList" component={ChatListScreen} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
    </Tab.Navigator>
  );
}

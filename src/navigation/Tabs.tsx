import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import ChatListScreen from "../screens/ChatListScreen";
import ScheduleScreen from '../screens/ScheduleScreen';
import SummaryScreen from "../screens/SummaryScreen";
import { Drawers } from './Drawers';

const Tab = createBottomTabNavigator<ROOT_NAVIGATION>();

export const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="CommentTab">
      <Tab.Screen
        name="CommentTab"
        component={Drawers}
        options={{
          headerShown: true,
          headerTitle: "게시판",
          tabBarLabel: "게시판",
          tabBarIcon: ({ color }) => {
            return (
              <Image
                source={require("../assets/images/Tabs/house.png")}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: color,
                }}
              />
            );
          },
          tabBarActiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="ScheduleTab"
        component={ScheduleScreen}
        options={{
          headerShown: true,
          headerTitle: "스케줄링",
          tabBarLabel: "스케줄링",
          tabBarIcon: ({ color }) => {
            return (
              <Image
                source={require("../assets/images/Tabs/calendar.png")}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: color,
                }}
              />
            );
          },
          tabBarActiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="ChatListTab"
        component={ChatListScreen}
        options={{
          headerShown: true,
          headerTitle: "채팅 목록",
          tabBarLabel: "채팅",
          tabBarIcon: ({ color }) => {
            return (
              <Image
                source={require("../assets/images/Tabs/messenger.png")}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: color,
                }}
              />
            );
          },
          tabBarActiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="SummaryTab"
        component={SummaryScreen}
        options={{
          headerShown: true,
          headerTitle: "내가 쓴 글",
          tabBarLabel: "내가 쓴 글",
          tabBarIcon: ({ color }) => {
            return (
              <Image
                source={require("../assets/images/Tabs/list.png")}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: color,
                }}
              />
            );
          },
          tabBarActiveTintColor: "black",
        }}
      />
    </Tab.Navigator>
  );
};

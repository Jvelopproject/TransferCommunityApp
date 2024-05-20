import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import ChatListScreen from "../screens/ChatListScreen";
import CommentScreen from "../screens/CommentScreen";
import ScheduleScreen from '../screens/ScheduleScreen';
import SummaryScreen from "../screens/SummaryScreen";

const Tab = createBottomTabNavigator<ROOT_NAVIGATION>();

export const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="CommentTab">
      <Tab.Screen
        name="CommentTab"
        component={CommentScreen}
        options={{
          headerShown: false,
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
          headerShown: false,
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
          headerShown: false,
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
          headerShown: false,
          tabBarLabel: "리스트",
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

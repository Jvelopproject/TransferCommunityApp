import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import ChatListScreen from "../screens/ChatListScreen";
import CommentScreen from "../screens/CommentScreen";
import ScheduleScreen from '../screens/ScheduleScreen';
import SummaryScreen from "../screens/SummaryScreen";

const Tab = createBottomTabNavigator<ROOT_NAVIGATION>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Comment">
      <Tab.Screen
        name="Comment"
        component={CommentScreen}
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
        name="Schedule"
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
        name="ChatList"
        component={ChatListScreen}
        options={{
          headerShown: true,
          headerTitle: "채팅 목록",
          tabBarLabel: "채팅 목록",
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
        name="Summary"
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

import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CommentScreen from "../screens/CommentScreen";

const Drawer = createDrawerNavigator<ROOT_NAVIGATION>();

export const Drawers = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        headerLeft: () => null,
        headerRight: () => null,
        headerTitle: () => null
      }}
    >
      <Drawer.Screen name="CommentTab" component={CommentScreen} />
    </Drawer.Navigator>
  );
};

export default Drawers;

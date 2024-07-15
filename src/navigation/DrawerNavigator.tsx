import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import AcademyCurriculumScreen from "../screens/AcademyCurriculumScreen";
import AcademyInfoScreen from "../screens/AcademyInfoScreen";

const Drawer = createDrawerNavigator<ROOT_NAVIGATION>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        headerLeft: () => null,
        headerRight: () => null,
        headerTitle: () => null,
      }}
    >
      <Drawer.Screen
        name="AcademyCurriculum"
        component={AcademyCurriculumScreen}
        options={{ headerTitle: "학원 커리큘럼" }}
      />
      <Drawer.Screen
        name="AcademyInfo"
        component={AcademyInfoScreen}
        options={{ headerTitle: "학원 정보" }}
      />
    </Drawer.Navigator>
  );
};

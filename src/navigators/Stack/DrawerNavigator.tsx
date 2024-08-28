import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../../screens/CategoriesScreen/CategoriesScreen";

import { RootStackParamList } from "../../navigators/types/types";
import ScreenNames from "../../navigators/ScreenNames";
import Colors from "../../constants/Colors";
import FavoriteScreen from "../../screens/FavoriteScreen/FavoriteScreen";

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primaryFont },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: Colors.backgroundColor },
        drawerContentStyle: { backgroundColor: Colors.primaryFont },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: Colors.accentColor,
      }}
    >
      <Drawer.Screen
        name={ScreenNames.MealCategories}
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen
        name={ScreenNames.FavoriteScreen}
        component={FavoriteScreen}
        options={{
          title: "Favorites",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

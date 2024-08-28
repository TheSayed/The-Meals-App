import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../../screens/CategoriesScreen/CategoriesScreen";
import MealsOverView from "../../screens/MealsOverView/MealsOverView";
import ScreenNames from "../ScreenNames";
import { RootStackParamList } from "../types/types";
import Colors from "../../constants/Colors";
import MealDetailsScreen from "../../screens/MealDetailsScreen/MealDetailsScreen";
import DrawerNavigator from "./DrawerNavigator";

const stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <stack.Navigator initialRouteName={ScreenNames.DrawerNavigator}>
      <stack.Screen
        name={ScreenNames.DrawerNavigator}
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen name={ScreenNames.MealOverView} component={MealsOverView} />
      <stack.Screen
        name={ScreenNames.MealDetails}
        component={MealDetailsScreen}
      />
    </stack.Navigator>
  );
};

export default StackNavigator;

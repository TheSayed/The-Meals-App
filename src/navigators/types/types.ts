import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import ScreenNames from "../ScreenNames";

export type RootStackParamList = {
  [ScreenNames.MealCategories]: { categoryId?: string };
  [ScreenNames.MealOverView]: { categoryId?: string };
  [ScreenNames.MealDetails]: { mealId?: string };
  [ScreenNames.FavoriteScreen]: {};
  [ScreenNames.DrawerNavigator]: undefined; // Add this line
};

export type CategoriesScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.MealCategories
>;

export type CategoriesScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof ScreenNames.MealCategories
>;

export type CategoriesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.MealCategories
>;

export type MealOverViewScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.MealOverView
>;

export type MealOverViewScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof ScreenNames.MealOverView
>;

export type MealOverViewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.MealOverView
>;

export type MealDetailsNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.MealCategories
>;

export type MealDetailsRouteProp = RouteProp<
  RootStackParamList,
  typeof ScreenNames.MealCategories
>;

export type MealDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.MealCategories
>;

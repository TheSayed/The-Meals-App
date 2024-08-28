import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MealOverViewScreenProps } from "../../navigators/types/types";
import { CATEGORIES, MEALS } from "../../data/dummy-data";

import MealsItem from "../../components/MealsItem";
import ScreenNames from "../../navigators/ScreenNames";

const MealsOverView = ({ route, navigation }: MealOverViewScreenProps) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) !== -1;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, CATEGORIES]);

  const handleNavigationToMealDetails = (mealId: string) => {
    navigation.navigate(ScreenNames.MealDetails, { mealId: mealId });
  };

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <MealsItem
            title={item.title}
            imageUrl={item.imageUrl}
            affordability={item.affordability}
            complexity={item.complexity}
            duration={item.duration}
            onPress={() => handleNavigationToMealDetails(item.id)}
          />
        );
      }}
    />
  );
};

export default MealsOverView;

const styles = StyleSheet.create({});

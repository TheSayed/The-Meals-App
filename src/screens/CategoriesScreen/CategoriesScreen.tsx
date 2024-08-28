import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../../data/dummy-data";
import CategoriesItem from "../../components/CategoriesItem";
import { CategoriesScreenProps } from "../../navigators/types/types";
import ScreenNames from "../../navigators/ScreenNames";

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const handleNavigationToCategoryItem = (itemId: string) => {
    navigation.navigate(ScreenNames.MealOverView, { categoryId: itemId });
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <CategoriesItem
              color={item.color}
              title={item.title}
              onPress={() => handleNavigationToCategoryItem(item.id)}
            />
          );
        }}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});

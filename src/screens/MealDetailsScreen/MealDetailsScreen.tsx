import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/types/types";
import ScreenNames from "../../navigators/ScreenNames";
import { MEALS } from "../../data/dummy-data";
import MealFineDetails from "../../components/MealFineDetails";
import Colors from "../../constants/Colors";
import MealDetailsList from "../../components/MealDetailsList";
import FavoriteStarIcon from "../../components/FavoriteStarIcon";

type MealDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.MealDetails
>;

const MealDetailsScreen = ({ route, navigation }: MealDetailsScreenProps) => {
  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <FavoriteStarIcon />,
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: meal?.imageUrl }} />
        <Text style={styles.mealTitle}>{meal?.title}</Text>
        <MealFineDetails
          affordability={meal?.affordability}
          complexity={meal?.complexity}
          duration={meal?.duration}
        />
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <View style={styles.separator} />
      <MealDetailsList data={meal?.ingredients} />
      <Text style={styles.title}>Steps</Text>
      <View style={styles.separator} />
      <MealDetailsList data={meal?.steps} />
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 15,
    marginBottom: 24,
  },
  mealTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.headerColor,
    marginBottom: 12,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.headerColor,
    marginBottom: 12,
    marginTop: 50,
  },
  separator: {
    width: "80%",
    height: 4,
    backgroundColor: Colors.headerColor,
    alignSelf: "center",
    marginBottom: 24,
  },
});

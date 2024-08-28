import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

type MealDetailsListProps = {
  data: string[];
};

const MealDetailsList = ({ data }: MealDetailsListProps) => {
  return (
    <View style={styles.stepsList}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Text style={styles.ingredientsText}>{item}</Text>;
        }}
        scrollEnabled={false}
      />
    </View>
  );
};

export default MealDetailsList;

const styles = StyleSheet.create({
  stepsList: {
    marginBottom: 100,
  },
  ingredientsText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "300",
    fontStyle: "italic",
    color: Colors.primaryFont,
    marginVertical: 10,
    backgroundColor: Colors.buttonColor,
    marginHorizontal: 16,
  },
});

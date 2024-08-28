import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

type MealFineDetailsProps = {
  affordability: string;
  complexity: string;
  duration: string;
};

const MealFineDetails = ({
  affordability,
  complexity,
  duration,
}: MealFineDetailsProps) => {
  return (
    <View style={styles.detailsList}>
      <Text style={styles.detailsText}>{affordability}</Text>
      <Text style={styles.detailsText}>{complexity}</Text>
      <Text style={styles.detailsText}>{duration} min.</Text>
    </View>
  );
};

export default MealFineDetails;

const styles = StyleSheet.create({
  detailsList: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  detailsText: {
    marginBottom: 12,
    fontSize: 14,
    color: Colors.primaryFont,
  },
});

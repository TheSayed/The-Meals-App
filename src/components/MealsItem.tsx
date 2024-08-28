import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import MealFineDetails from "./MealFineDetails";

type MealsItemsProps = {
  title: string;
  imageUrl: string;
  affordability: string;
  complexity: string;
  duration: string;
  onPress?: () => void;
};

const MealsItem = ({
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
  onPress,
}: MealsItemsProps) => {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? { ...styles.innerContainer, opacity: 0.25 }
            : styles.innerContainer
        }
        onPress={onPress}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.titleText}>{title}</Text>
        <MealFineDetails
          affordability={affordability}
          complexity={complexity}
          duration={duration}
        />
      </Pressable>
    </View>
  );
};

export default MealsItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 16,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.4,
    borderRadius: 12,
  },
  innerContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 12,
  },
  titleText: {
    textAlign: "center",
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
});

import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type CategoriesItemProps = {
  title: string;
  color: string;
  onPress: () => void;
};

const CategoriesItem = ({ title, color, onPress }: CategoriesItemProps) => {
  return (
    <View style={[styles.itemContainer]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.innerContainer,
          {
            backgroundColor: pressed
              ? `${color}80` // Adjust opacity to 50%
              : color, // Original color
          },
        ]}
        onPress={onPress}
      >
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoriesItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 16,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 4,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    borderRadius: 16,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

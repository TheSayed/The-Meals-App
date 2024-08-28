import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";

const FavoriteStarIcon = () => {
  const handleAddToFavorites = () => {
    console.log("Add to favorites");
  };
  return (
    <TouchableOpacity onPress={handleAddToFavorites}>
      <AntDesign name="star" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default FavoriteStarIcon;

const styles = StyleSheet.create({});

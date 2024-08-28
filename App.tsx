import "react-native-gesture-handler";
import { View, Text, StatusBar } from "react-native";
import React from "react";
import StackNavigator from "./src/navigators/Stack/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type props = {
  name?: string;
};
export default function App({ name }: props) {
  return (
    <View style={styles.container}>
      <Text>The developer name is {name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

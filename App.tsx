import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => Alert.alert("Tocaste el texto.")}>
        <Text>Hola Mundo!</Text>
      </TouchableNativeFeedback>
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

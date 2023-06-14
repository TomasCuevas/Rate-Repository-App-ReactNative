import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

//* COMPONENT *//
import { StyledText } from "./StyledText";

//* THEME *//
import { theme } from "../theme";

export const AppBar: React.FC = () => {
  return (
    <View style={Styles.container}>
      <StyledText style={Styles.text} fontWeight="bold">
        Repositories
      </StyledText>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});

import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

//* COMPONENT *//
import { AppBarTab } from "./AppBarTab";

//* THEME *//
import { theme } from "../theme";

export const AppBar: React.FC = () => {
  return (
    <View style={Styles.container}>
      <AppBarTab to="/" active>
        Repositories
      </AppBarTab>
      <AppBarTab to="/signin" active>
        Sign In
      </AppBarTab>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection: "row",
    gap: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
});

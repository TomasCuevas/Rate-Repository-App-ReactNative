import { StyleSheet, View, ScrollView } from "react-native";
import Constants from "expo-constants";

//* COMPONENT *//
import { AppBarTab } from "./AppBarTab";

//* THEME *//
import { theme } from "../theme";

export const AppBar: React.FC = () => {
  return (
    <View style={Styles.container}>
      <ScrollView horizontal style={Styles.tabs}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
        <AppBarTab to="/signin">Versión por defecto</AppBarTab>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
  },
  tabs: {
    paddingBottom: 15,
  },
});

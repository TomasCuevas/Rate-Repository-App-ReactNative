import { Text, View, Platform } from "react-native";
import { Routes, Route } from "react-router-native";

//* COMPONENTS *//
import { RepositoryList } from "./RepositoryList";

const AppBar = Platform.select({
  android: () => require("./AppBar.android.tsx").default,
  default: () => require("./AppBar.tsx").default,
})();

export const Main = () => {
  return (
    <View style={{ flexGrow: 1, flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<Text>Working on it</Text>} />
      </Routes>
    </View>
  );
};

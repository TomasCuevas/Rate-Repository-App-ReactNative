import { Text, View } from "react-native";
import { Routes, Route } from "react-router-native";

//* COMPONENTS *//
import { RepositoryList } from "./RepositoryList";
import { AppBar } from "./AppBar";

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

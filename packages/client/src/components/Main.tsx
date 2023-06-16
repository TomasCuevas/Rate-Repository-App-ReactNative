import { View } from "react-native";
import { Routes, Route } from "react-router-native";

//* COMPONENTS *//
import { RepositoryList } from "./RepositoryList";
import { AppBar } from "./AppBar";

//* PAGES *//
import { LoginPage } from "../pages/Login";

export const Main = () => {
  return (
    <View style={{ flexGrow: 1, flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </View>
  );
};

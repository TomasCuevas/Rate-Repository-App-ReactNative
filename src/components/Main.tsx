import { View } from "react-native";

//* COMPONENTS *//
import { RepositoryList } from "./RepositoryList";
import { AppBar } from "./AppBar";

export const Main = () => {
  return (
    <View style={{ flexGrow: 1, flex: 1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

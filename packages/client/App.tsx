import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";

//* MAIN-COMPONENT *//
import { Main } from "./src/components/Main";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}
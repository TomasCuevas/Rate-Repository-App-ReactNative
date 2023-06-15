import { NativeRouter } from "react-router-native";

//* MAIN-COMPONENT *//
import { Main } from "./src/components/Main";

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}

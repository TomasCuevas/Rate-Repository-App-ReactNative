import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";

//* MAIN-COMPONENT *//
import { Main } from "./src/components/Main";

//* UTIL *//
import { createApolloClient } from "./src/utils";

const apolloClient = createApolloClient;

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
}

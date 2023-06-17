import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createApolloClient = new ApolloClient({
  uri: "http://192.168.1.11:4000/graphql",
  cache: new InMemoryCache(),
});

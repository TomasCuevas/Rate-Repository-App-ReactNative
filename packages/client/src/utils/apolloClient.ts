import ApolloClient from "apollo-boost";

export const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://192.168.1.11:5000/graphql",
  });
};

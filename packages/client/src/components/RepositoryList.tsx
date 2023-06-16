import { FlatList, Text } from "react-native";

//* COMPONENT *//
import { RepositoryItem } from "./RepositoryItem";

//* DATA *//
import { repositoriesData } from "../data";

export const RepositoryList = () => {
  return (
    <FlatList
      data={repositoriesData}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repository }) => (
        <RepositoryItem repository={repository} />
      )}
    />
  );
};

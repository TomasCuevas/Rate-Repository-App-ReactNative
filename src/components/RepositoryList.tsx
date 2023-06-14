import { FlatList, Text, View } from "react-native";

import { repositoriesData } from "../data";
import { RepositoryItem } from "./RepositoryItem";

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

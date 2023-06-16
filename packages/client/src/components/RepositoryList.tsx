import { FlatList, Text } from "react-native";

//* COMPONENT *//
import { RepositoryItem } from "./RepositoryItem";

//* HOOK *//
import { useRepositories } from "../hooks";

export const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repository }) => (
        <RepositoryItem repository={repository} />
      )}
    />
  );
};

import { Text, View } from "react-native";

import { repositoriesData } from "../data";

export const RepositoryList = () => {
  return (
    <View>
      {repositoriesData.map((repository) => (
        <View key={repository.id}>
          <Text>id: {repository.id}</Text>
          <Text>FullName: {repository.fullName}</Text>
          <Text>Description: {repository.description}</Text>
          <Text>Lenguage: {repository.language}</Text>
          <Text>Starts: {repository.stargazersCount}</Text>
          <Text>Forks: {repository.forksCount}</Text>
          <Text>Reviews: {repository.reviewCount}</Text>
          <Text>Rating: {repository.ratingAverage}</Text>
        </View>
      ))}
    </View>
  );
};

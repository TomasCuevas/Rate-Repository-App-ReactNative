import { Text, View } from "react-native";

//* INTERFACES *//
import { IRepository } from "../interfaces";

interface Props {
  repository: IRepository;
}

export const RepositoryItem: React.FC<Props> = ({ repository }) => {
  return (
    <View style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}>
      <Text style={{ fontWeight: "bold", marginBottom: 3 }}>
        id: {repository.id}
      </Text>
      <Text>FullName: {repository.fullName}</Text>
      <Text>Description: {repository.description}</Text>
      <Text>Lenguage: {repository.language}</Text>
      <Text>Starts: {repository.stargazersCount}</Text>
      <Text>Forks: {repository.forksCount}</Text>
      <Text>Reviews: {repository.reviewCount}</Text>
      <Text>Rating: {repository.ratingAverage}</Text>
    </View>
  );
};

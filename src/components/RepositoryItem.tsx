import { View, StyleSheet } from "react-native";

//* COMPONENT *//
import { StyledText } from "./StyledText";

//* INTERFACES *//
import { IRepository } from "../interfaces";

interface Props {
  repository: IRepository;
}

export const RepositoryItem: React.FC<Props> = ({ repository }) => {
  return (
    <View style={Styles.container}>
      <StyledText fontWeight="bold" fontSize="subheading">
        {repository.fullName}
      </StyledText>
      <StyledText>{repository.description}</StyledText>
      <StyledText>{repository.language}</StyledText>
      <StyledText>Stars: {repository.stargazersCount}</StyledText>
      <StyledText>Forks: {repository.forksCount}</StyledText>
      <StyledText>Reviews: {repository.reviewCount}</StyledText>
      <StyledText>Rating: {repository.ratingAverage}</StyledText>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  strong: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 5,
  },
});

import { View, StyleSheet, Image } from "react-native";

//* COMPONENT *//
import { StyledText } from "./StyledText";
import { RepositoryStats } from "./RepositoryStats";

//* THEME *//
import { theme } from "../theme";

//* INTERFACES *//
import { IRepository } from "../interfaces";

interface Props {
  repository: IRepository;
}

export const RepositoryItem: React.FC<Props> = ({ repository }) => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={{ uri: repository.ownerAvatarUrl }} />
      <StyledText fontWeight="bold" fontSize="subheading">
        {repository.fullName}
      </StyledText>
      <StyledText>{repository.description}</StyledText>
      <StyledText style={Styles.lenguage}>{repository.language}</StyledText>
      <RepositoryStats repository={repository} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  lenguage: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 7,
    overflow: "hidden",
    marginVertical: 5,
  },
  image: {
    width: 48,
    height: 48,
  },
});

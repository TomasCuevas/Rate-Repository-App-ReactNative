import { View, StyleSheet } from "react-native";

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
    padding: 20,
    paddingVertical: 5,
  },
  lenguage: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
  },
});

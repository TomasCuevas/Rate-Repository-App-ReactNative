import { View, StyleSheet, Image } from "react-native";

//* COMPONENT *//
import { StyledText } from "./StyledText";
import { RepositoryStats } from "./RepositoryStats";

//* THEME *//
import { theme } from "../theme";

//* INTERFACES *//
import { IRepository } from "../interfaces";
import { RepositoryItemHeader } from "./RepositoryItemHeader";

interface Props {
  repository: IRepository;
}

export const RepositoryItem: React.FC<Props> = ({ repository }) => {
  return (
    <View style={Styles.container}>
      <RepositoryItemHeader repository={repository} />
      <RepositoryStats repository={repository} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});

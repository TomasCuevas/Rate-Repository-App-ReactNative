import { Image, StyleSheet, View, Platform } from "react-native";

//* COMPONENT *//
import { StyledText } from "./StyledText";

//* THEME *//
import { theme } from "../theme";

//* INTERFACES *//
import { IRepository } from "../interfaces";

interface Props {
  repository: IRepository;
}

export const RepositoryItemHeader: React.FC<Props> = ({ repository }) => {
  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <View style={{ flex: 0 }}>
        <Image
          style={Styles.image}
          source={{ uri: repository.ownerAvatarUrl }}
        />
      </View>
      <View style={{ flex: 1, gap: 2 }}>
        <StyledText fontWeight="bold" fontSize="subheading">
          {repository.fullName}
        </StyledText>
        <StyledText color="secondary">{repository.description}</StyledText>
        <StyledText style={Styles.lenguage}>{repository.language}</StyledText>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  lenguage: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: "green",
    }),
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

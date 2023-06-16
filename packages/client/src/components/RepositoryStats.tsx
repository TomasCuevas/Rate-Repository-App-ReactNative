import { View } from "react-native";

//* COMPONENT *//
import { StyledText } from "./StyledText";

//* UTIL *//
import { parseThousands } from "../utils";

//* INTERFACES *//
import { IRepository } from "../interfaces";

interface Props {
  repository: IRepository;
}

export const RepositoryStats: React.FC<Props> = ({ repository }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <View>
        <StyledText align="center" fontWeight="bold">
          Stars
        </StyledText>
        <StyledText align="center">
          {parseThousands(repository.stargazersCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Forks
        </StyledText>
        <StyledText align="center">
          {parseThousands(repository.forksCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Reviews
        </StyledText>
        <StyledText align="center">
          {parseThousands(repository.reviewCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Rating
        </StyledText>
        <StyledText align="center">
          {parseThousands(repository.ratingAverage)}
        </StyledText>
      </View>
    </View>
  );
};

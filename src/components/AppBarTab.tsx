import { StyleSheet } from "react-native";
import { Link } from "react-router-native";

//* COMPONENT *//
import { StyledText } from "./StyledText";

//* THEME *//
import { theme } from "../theme";

//* INTERFACE *//
interface Props {
  children: React.ReactNode;
  active: boolean;
  to: string;
}

export const AppBarTab: React.FC<Props> = ({ children, active, to }) => {
  return (
    <Link to={to}>
      <StyledText style={Styles.text} fontWeight="bold">
        {children}
      </StyledText>
    </Link>
  );
};

const Styles = StyleSheet.create({
  text: {
    color: theme.appBar.textPrimary,
  },
});

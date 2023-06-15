import { StyleSheet } from "react-native";
import { Link, useLocation } from "react-router-native";

//* COMPONENT *//
import { StyledText } from "./StyledText";

//* INTERFACE *//
interface Props {
  children: React.ReactNode;
  to: string;
}

export const AppBarTab: React.FC<Props> = ({ children, to }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link to={to}>
      <StyledText
        style={Styles.text}
        color={isActive ? "white" : "secondary"}
        fontWeight={isActive ? "bold" : "normal"}
      >
        {children}
      </StyledText>
    </Link>
  );
};

const Styles = StyleSheet.create({
  text: {
    // color: theme.appBar.textPrimary,
    paddingHorizontal: 10,
  },
});

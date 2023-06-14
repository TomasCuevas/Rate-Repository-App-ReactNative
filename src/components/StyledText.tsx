import { Text, StyleSheet } from "react-native";

//* THEME *//
import { theme } from "../theme";

//* INTERFACE *//
interface Props {
  children: React.ReactNode;
  align?: "center";
  color?: "primary" | "secondary";
  fontSize?: "subheading";
  fontWeight?: "bold";
  props?: any;
}

export const StyledText: React.FC<Props> = ({
  children,
  align,
  color,
  fontSize,
  fontWeight,
  ...props
}) => {
  const textStyles = [
    Styles.text,
    align === "center" && Styles.textAlignCenter,
    color === "primary" && Styles.colorPrimary,
    color === "secondary" && Styles.colorSecondary,
    fontSize === "subheading" && Styles.subheading,
    fontWeight === "bold" && Styles.bold,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};

const Styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal as "normal",
  },
  textAlignCenter: {
    textAlign: "center",
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold as "bold",
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
});

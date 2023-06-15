import { Text, StyleSheet } from "react-native";

//* THEME *//
import { theme } from "../theme";

//* INTERFACE *//
interface Props {
  children: React.ReactNode;
  align?: "center";
  color?: "primary" | "secondary" | "white";
  fontSize?: "subheading";
  fontWeight?: "bold" | "normal";
  style?: any;
  [key: string]: any;
}

export const StyledText: React.FC<Props> = ({
  children,
  align,
  color,
  fontSize,
  fontWeight,
  style,
  ...props
}) => {
  const textStyles = [
    Styles.text,
    align === "center" && Styles.textAlignCenter,
    color === "primary" && Styles.colorPrimary,
    color === "secondary" && Styles.colorSecondary,
    color === "white" && Styles.colorWhite,
    fontSize === "subheading" && Styles.subheading,
    fontWeight === "bold" && Styles.bold,
    fontWeight === "normal" && Styles.normal,
    style,
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
  colorWhite: {
    color: theme.colors.white,
  },
  bold: {
    fontWeight: theme.fontWeights.bold as "bold",
  },
  normal: {
    fontWeight: theme.fontWeights.normal as "normal",
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
});

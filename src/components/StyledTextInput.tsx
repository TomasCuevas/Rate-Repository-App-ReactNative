import { StyleSheet, TextInput, View, Text } from "react-native";

//* INTERFACE *//
interface Props {
  error?: string;
  style?: any;
  [key: string]: any;
}

export const StyledTextInput: React.FC<Props> = ({
  error,
  style,
  ...props
}) => {
  const inputStyle = [Styles.textInput, style, error && Styles.error];

  return (
    <View>
      <TextInput style={inputStyle} {...props}></TextInput>
      {error && <Text style={Styles.errorMessage}>{error}</Text>}
    </View>
  );
};

const Styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  errorMessage: {
    color: "red",
  },
  error: {
    borderColor: "red",
  },
});

import { StyleSheet, TextInput } from "react-native";

//* INTERFACE *//
interface Props {
  style?: any;
  [key: string]: any;
}

export const StyledTextInput: React.FC<Props> = ({ style, ...props }) => {
  const inputStyle = {
    ...Styles.textInput,
    style,
  };

  return <TextInput style={inputStyle} {...props}></TextInput>;
};

const Styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

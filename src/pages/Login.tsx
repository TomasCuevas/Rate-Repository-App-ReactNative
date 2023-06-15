import { View, Button } from "react-native";
import { useFormik } from "formik";

//* COMPONENT *//
import { StyledTextInput } from "../components/StyledTextInput";

//* FORM-INITIAL-VALUES *//
const initialValues = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10, gap: 10 }}>
      <StyledTextInput
        placeholder="Email"
        value={formik.values.email}
        onChangeText={formik.handleChange("email")}
      />
      <StyledTextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
      />
      <Button onPress={formik.submitForm} title="Login" />
    </View>
  );
};

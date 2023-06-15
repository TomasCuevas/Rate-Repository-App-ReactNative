import { View, Button } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

//* COMPONENT *//
import { StyledTextInput } from "../components/StyledTextInput";

//* FORM-DATA *//
import { formValidations, formValues } from "./login.formData";

export const LoginPage = () => {
  const formik = useFormik({
    initialValues: formValues(),
    validationSchema: formValidations(),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10, gap: 10 }}>
      <StyledTextInput
        error={formik.errors.email}
        placeholder="Email"
        value={formik.values.email}
        onChangeText={formik.handleChange("email")}
      />
      <StyledTextInput
        error={formik.errors.password}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
      />
      <Button onPress={formik.submitForm} title="Login" />
    </View>
  );
};

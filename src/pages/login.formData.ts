import * as Yup from "yup";

export const formValues = () => ({
  email: "",
  password: "",
});

export const formValidations = () => {
  return Yup.object({
    email: Yup.string()
      .email("El email ingresado no es valido.")
      .required("El email es requerido."),
    password: Yup.string()
      .min(6, "El password debe tener como minimo 6 caracteres.")
      .max(20, "El password debe tener como maximo 20 caracteres.")
      .required("El password es requerido."),
  });
};

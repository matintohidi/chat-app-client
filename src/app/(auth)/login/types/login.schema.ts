import * as yup from "yup";

export const LoginFormValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

"use client";

import { withFormik } from "formik";
import * as yup from "yup";
import { LoginFormValuesInterface } from "@/contracts/auth";
import InnerLoginForm from "@/app/(auth)/login/_components/innerLoginForm";
// import callApi from "../../../helpers/callApi";
// import ValidationError from "../../../exceptions/validationError";
// import { loginRoute } from "../../../utils/APIRoutes";

const LoginFormValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

interface LoginFormProps {
  email?: string;
  password?: string;
  // navigate?: unknown;
  // setCookie?: (coockie: unknown, value: string) => void;
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: ({ email, password }) => {
    return {
      email: email ?? "",
      password: password ?? "",
    };
  },
  validationSchema: LoginFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      // const { setCookie, navigate } = props;
      // const res = await callApi().post(loginRoute, values);
      // if (res.status === 200) {
      //   setCookie("chat-user", res.data.token);
      //   navigate("/chat");
      // }
    } catch (err) {
      // if (err instanceof ValidationError) {
      //   Object.entries(err.messages).forEach(([key, value]) =>
      //     setFieldError(key, value as string)
      //   );
      // }
    }
  },
})(InnerLoginForm);

export default LoginForm;

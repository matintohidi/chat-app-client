"use client";

import { withFormik } from "formik";
import * as yup from "yup";
import { RegisterFormValuesInterface } from "@/contracts/auth";
import InnerRegisterForm from "@/app/(auth)/register/_components/innerRegisterForm";
// import callApi from "../../../helpers/callApi";
// import ValidationError from "../../../exceptions/validationError";
// import { registerRoute } from "../../../utils/APIRoutes";

const RegisterFormValidationSchema = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

interface RegisterFormProps {
  name?: string;
  email?: string;
  password?: string;
  navigate: unknown;
  setCookie: (cookie: unknown, value: string) => void;
}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>(
  {
    mapPropsToValues: ({ name, email, password }) => {
      return {
        name: name ?? "",
        email: email ?? "",
        password: password ?? "",
      };
    },
    validationSchema: RegisterFormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
      try {
        // const { setCookie, navigate } = props;
        // const res = await callApi().post(registerRoute, values);
        // if (res.status === 201) {
        //   setCookie("set-profile-token", res.data.token);
        //   navigate("/setprofile");
        // }
      } catch (err: unknown) {
        // if (err instanceof ValidationError) {
        //   Object.entries(err.messages).forEach(([key, value]) =>
        //     setFieldError(key, value as string)
        //   );
        // }
      }
    },
  }
)(InnerRegisterForm);

export default RegisterForm;

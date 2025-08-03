"use client";

import { withFormik } from "formik";
import InnerRegisterForm from "@/app/(auth)/register/components/innerRegisterForm";
import { RegisterFormValidationSchema } from "@/app/(auth)/register/types/register.schema";
import { Register } from "@/app/(auth)/register/types/register.type";
// import callApi from "../../../helpers/callApi";
// import ValidationError from "../../../exceptions/validationError";
// import { registerRoute } from "../../../utils/APIRoutes";

interface RegisterFormProps {
  name?: string;
  email?: string;
  password?: string;
}

const RegisterForm = withFormik<RegisterFormProps, Register>({
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
})(InnerRegisterForm);

export default RegisterForm;

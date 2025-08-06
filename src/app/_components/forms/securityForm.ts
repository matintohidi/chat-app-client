"use client";

import { withFormik } from "formik";
import * as yup from "yup";
import InnerSecurityForm from "../../(dashboard)/chat/setting/components/security/innerSecurityForm";
import { ISecurityFormValues } from "@/contracts/auth";
// import callApi from "../../../helpers/callApi";
// import ValidationError from "../../../exceptions/validationError";

const SecurityValidationSchema = yup.object().shape({
  oldPassword: yup.string().min(8).required(),
  newPassword: yup.string().min(8).required(),
  repeatNewPassword: yup.string().min(8).required(),
});

interface SecurityInfoProps {
  cookies: { [p: string]: unknown };
}

const SecurityForm = withFormik<SecurityInfoProps, ISecurityFormValues>({
  mapPropsToValues: () => {
    return {
      oldPassword: "",
      newPassword: "",
      repeatNewPassword: "",
    };
  },
  validationSchema: SecurityValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    const { cookies } = props;
    const { oldPassword, newPassword, repeatNewPassword } = values;

    if (newPassword === repeatNewPassword) {
      try {
        // await callApi().put(
        //   changePassword,
        //   { oldPassword, newPassword },
        //   {
        //     headers: { Authorization: cookies["chat-user"] },
        //   }
        // );

        console.log("ok");
      } catch (err: unknown) {
        // if (err instanceof ValidationError) {
        //   Object.entries(err).forEach(([key, value]) =>
        //     setFieldError(key, value as string)
        //   );
        // } else {
        // }
      }
    } else {
      console.log("The repeat password is not right!");
    }
  },
})(InnerSecurityForm);

export default SecurityForm;

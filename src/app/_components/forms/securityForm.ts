// packages dependencies
import { withFormik } from "formik";
import * as yup from "yup";
// components
import InnerSecurityForm from "../../(chat)/chat/setting/security/_components/innerSecurityForm";
// contracts
import { SecurityFormValuesInterface } from "@/contracts/auth";
//helpers
// import callApi from "../../../helpers/callApi";
// exceptions
// import ValidationError from "../../../exceptions/validationError";
// utils

const SecurityValidationSchema = yup.object().shape({
  oldPassword: yup.string().min(8).required(),
  newPassword: yup.string().min(8).required(),
  repeatNewPassword: yup.string().min(8).required(),
});

interface SecurityInfoProps {
  cookies: { [p: string]: unknown };
}

const SecurityForm = withFormik<SecurityInfoProps, SecurityFormValuesInterface>(
  {
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
  }
)(InnerSecurityForm);

export default SecurityForm;

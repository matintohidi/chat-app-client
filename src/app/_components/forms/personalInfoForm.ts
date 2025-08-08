// "use client";

// import { withFormik } from "formik";
// import * as yup from "yup";
// import InnerPersonalInfoForm from "@/app/(dashboard)/chat/setting/components/personal-info/innerPersonalInfoForm";
// import { IPersonalInfoFormValues, UserModel } from "@/contracts/auth";
// // import callApi from "../../../helpers/callApi";
// // import ValidationError from "../../../exceptions/validationError";
// // import { changeUserInfo , changeProfile } from "../../../utils/APIRoutes";

// const PersonalInfoValidationSchema = yup.object().shape({
//   name: yup.string().min(3).max(20).required(),
//   phone: yup.number().typeError("phone must be a number."),
//   city: yup.string().max(20),
// });

// import { AppDispatch } from "@/store";
// import { setUser } from "@/store/slices/user.slice";

// interface PersonalInfoProps {
//   user: UserModel;
//   cookies: { [p: string]: unknown };
//   dispatch: AppDispatch;
// }

// const PersonalInfoForm = withFormik<PersonalInfoProps, IPersonalInfoFormValues>(
//   {
//     mapPropsToValues: ({ user }) => {
//       return {
//         name: user.name ?? "",
//         phoneNumber: user.phoneNumber ?? "",
//         city: user.city ?? "",
//         profile: user.profile ?? "",
//       };
//     },
//     validationSchema: PersonalInfoValidationSchema,
//     handleSubmit: async (values, { props, setFieldError }) => {
//       const { cookies, user, dispatch } = props;
//       const { name, phoneNumber, city, profile } = values;

//       let updatedUser = { ...user, name, phoneNumber, city };

//       try {
//         // await callApi().put(
//         //   changeUserInfo,
//         //   { name, phone, city },
//         //   {
//         //     headers: { Authorization: cookies["chat-user"] },
//         //   }
//         // );
//       } catch (err: unknown) {
//         // if (err instanceof ValidationError) {
//         //   Object.entries(err.messages).forEach(([key, value]) =>
//         //     setFieldError(key, value as string)
//         //   );
//         // } else {
//         //   console.error("Error updating user info:", err);
//         // }
//       }

//       if (profile !== user.profile) {
//         if (profile) {
//           const changeProfileForm = new FormData();
//           changeProfileForm.append("profile", profile);
//           changeProfileForm.append("id", user.id ?? "");

//           try {
//             // await callApi().put(changeProfile, changeProfileForm, {
//             //   headers: {
//             //     "Content-Type": "multipart/form-data",
//             //     Authorization: cookies["chat-user"],
//             //   },
//             // });
//             // window.location.reload();
//           } catch (err: unknown) {
//             // if (err instanceof ValidationError) {
//             //   Object.entries(err.messages).forEach(([key, value]) =>
//             //     setFieldError(key, value as string)
//             //   );
//             // } else {
//             //   console.error("Error updating profile:", err);
//             // }
//           }
//         } else {
//           try {
//             // await callApi().put(
//             //   changeProfile,
//             //   { id: user._id },
//             //   {
//             //     headers: { Authorization: cookies["chat-user"] },
//             //   }
//             // );

//             updatedUser = { ...updatedUser, profile: undefined };
//           } catch (err: unknown) {
//             // if (err instanceof ValidationError) {
//             //   Object.entries(err.messages).forEach(([key, value]) =>
//             //     setFieldError(key, value as string)
//             //   );
//             // } else {
//             //   console.error("Error clearing profile picture:", err);
//             // }
//           }
//         }
//       }

//       dispatch(setUser(updatedUser));
//     },
//   }
// )(InnerPersonalInfoForm);

// export default PersonalInfoForm;

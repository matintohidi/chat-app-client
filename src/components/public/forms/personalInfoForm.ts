// packages dependencies
import { withFormik } from "formik";
import * as yup from "yup";
// components
import InnerPersonalInfoForm from "../auth/innerPersonalInfoForm";
// contracts
import { PersonalInfoFormValuesInterface, UserValuesInterface } from "../../../contracts/auth";
//helpers
import callApi from "../../../helpers/callApi";
// exceptions
import ValidationError from "../../../exceptions/validationError";
// utils
import { changeUserInfo , changeProfile } from "../../../utils/APIRoutes";
// redux
import { setUser } from "../../../store/slices/userSlice";

const PersonalInfoValidationSchema = yup.object().shape({
    name: yup.string().min(3).max(20).required(),
    phone: yup.number().typeError("phone must be a number."),
    city: yup.string().max(20)
})

interface PersonalInfoProps {
    user: UserValuesInterface,
    cookies: {[p: string]: any},
    dispatch: any
}

const PersonalInfoForm = withFormik<PersonalInfoProps , PersonalInfoFormValuesInterface>({
    mapPropsToValues: ({ user }) => {
        return {
            name: user.name ?? "",
            phone: user.phone ?? "",
            city: user.city ?? "",
            profile: user.profile ?? ""
        }
    },
    validationSchema: PersonalInfoValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        const { cookies, user, dispatch } = props;
        const { name, phone, city, profile } = values;

        let updatedUser = { ...user , name, phone, city };

        try {
            await callApi().put(changeUserInfo, { name, phone, city }, {
                headers: { "Authorization": cookies["chat-user"] }
            })
        } catch (err: any) {
            if (err instanceof ValidationError) {
                Object.entries(err.messages).forEach(([key, value]) => setFieldError(key, value as string));
            } else {
                console.error("Error updating user info:", err);
            }
        }

        if(profile !== user.profile) {
            if(profile) {
                const changeProfileForm = new FormData();
                changeProfileForm.append("profile", profile);
                changeProfileForm.append("id", user._id);

                try {
                    await callApi().put(changeProfile, changeProfileForm, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "Authorization": cookies["chat-user"]
                        }
                    })

                    window.location.reload();
                } catch (err: any) {
                    if(err instanceof ValidationError) {
                        Object.entries(err.messages).forEach(([key, value]) => setFieldError(key, value as string));
                    } else {
                        console.error("Error updating profile:", err);
                    }
                }
            } else {
                try {
                    await callApi().put(changeProfile, { id: user._id }, {
                        headers: { "Authorization": cookies["chat-user"] }
                    });

                    updatedUser = { ...updatedUser, profile: null };
                } catch (err: any) {
                    if(err instanceof ValidationError) {
                        Object.entries(err.messages).forEach(([key, value]) => setFieldError(key, value as string));
                    } else {
                        console.error("Error clearing profile picture:", err);
                    }
                }
            }
        }

        dispatch(setUser(updatedUser));
    }
})(InnerPersonalInfoForm)

export default PersonalInfoForm;
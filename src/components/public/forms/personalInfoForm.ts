// packages dependencies
import { withFormik } from "formik";
import * as yup from "yup";
// components
import InnerPersonalInfoForm from "../auth/innerPersonalInfoForm";
// contracts
import { PersonalInfoFormValuesInterface } from "../../../contracts/auth";
// exceptions
import ValidationError from "../../../exceptions/validationError";

const PersonalInfoValidationSchema = yup.object().shape({
    name: yup.string().min(3).max(20),
    email: yup.string().email(),
    phone: yup.number().typeError("phone must be a number."),
    city: yup.string().max(20)
})

interface PersonalInfoProps {
    name?: string,
    email?: string,
    phone?: string,
    city?: string,
    profile?: string
}

const PersonalInfoForm = withFormik<PersonalInfoProps , PersonalInfoFormValuesInterface>({
    mapPropsToValues: ({ name , email , phone , city , profile }) => {
        return {
            name: name ?? "",
            email: email ?? "",
            phone: phone ?? "",
            city: city ?? "",
            profile: profile ?? ""
        }
    },
    validationSchema: PersonalInfoValidationSchema,
    handleSubmit: async (values , { setFieldError }) => {
        try {
            console.log(values);
        } catch (err:any) {
            if(err instanceof ValidationError) {
                Object.entries(err.messages).forEach(([ key , value ]) => setFieldError(key , value as string));
            }
        }
    }
})(InnerPersonalInfoForm)

export default PersonalInfoForm;
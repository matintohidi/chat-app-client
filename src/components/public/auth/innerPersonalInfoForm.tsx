// packages dependencies
import { Form , FormikProps } from "formik";
// components
import ChangeProfile from "../home/setting/personal-info/changeProfile";
import InputSetting from "../../shared/inputSetting";
// contracts
import { PersonalInfoFormValuesInterface } from "../../../contracts/auth";
// redux
import { useAppSelector } from "../../../hooks";

const InnerPersonalInfoForm = (props: FormikProps<PersonalInfoFormValuesInterface>) => {
    const { user , loading } = useAppSelector(state => state);

    return (
        <Form className="border-t pt-4">
            <ChangeProfile profile={user.user?.profile} name={user.user?.name} city={user.user?.city} />

            <div className="mt-6 sm:mt-11 flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6">
                <InputSetting name="name" label="Name" placeHolder="Matin" />
                <InputSetting name="email" label="Email" placeHolder={user.user?.email} disable={true} />
                <InputSetting name="phone" label="Phone" placeHolder="09123456789" />
                <InputSetting name="city" label="City" placeHolder="Tehran" />
            </div>

            {
                loading.loading
                    ? <div className="mt-4 w-32 h-8 bg-slate-200 animate-pulse rounded-lg"></div>
                    : <button type="submit" className="mt-4 px-7 py-2.5 bg-primary text-white font-InterRegular rounded-lg text-xs">Save Changes</button>

            }
        </Form>
    )
}

export default InnerPersonalInfoForm;
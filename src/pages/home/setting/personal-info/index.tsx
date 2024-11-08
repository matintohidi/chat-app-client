import React from "react";
// react router dom
import { Link } from "react-router-dom";
// redux
import { useAppSelector , useAppDispatch } from "../../../../hooks";
// packages dependencies
import { useCookies } from "react-cookie";
import { Back } from "iconsax-react";
// components
import PersonalInfoForm from "../../../../components/public/forms/personalInfoForm";

const PersonalInfo : React.FC = () => {
    const [ cookies ] = useCookies();
    const { user } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    return (
        <section className="flex flex-col text-primaryText w-full sm:pl-4">
            <div className="flex items-center gap-2 pb-4">
                <Link to="/chat/setting" className="sm:hidden text-primary">
                    <Back size={28}/>
                </Link>

                <h3 className="text-md sm:text-lg">General Information</h3>
            </div>

            { user && <PersonalInfoForm user={user} cookies={cookies} dispatch={dispatch}/> }
        </section>
    )
}

export default PersonalInfo;
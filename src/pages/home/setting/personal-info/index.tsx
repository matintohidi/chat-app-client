import React from 'react';
// react router dom
import { Link } from "react-router-dom";
// redux
import { useAppSelector } from "../../../../hooks";
// packages dependencies
import { Back } from "iconsax-react";
// components
import PersonalInfoForm from "../../../../components/public/forms/personalInfoForm";

const PersonalInfo : React.FC = () => {
    const { user } = useAppSelector(state => state);
    return (
        <section className="flex flex-col text-primaryText w-full sm:pl-4">
            <div className="flex items-center gap-2 pb-4">
                <Link to="/chat/setting" className="sm:hidden text-primary">
                    <Back size={28}/>
                </Link>

                <h3 className="text-md sm:text-lg">General Information</h3>
            </div>

            <PersonalInfoForm profile={user.user?.profile} name={user.user?.name} email={user.user?.email} city={user.user?.city} phone={user.user?.phone} />
        </section>
    )
}

export default PersonalInfo;
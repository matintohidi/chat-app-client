import React from "react";
// react router dom
import { Link } from "react-router-dom";
// packages dependencies
import { useCookies } from "react-cookie";
import { Back } from "iconsax-react";
// components
import { SecurityForm } from "../../../../components";


const Security : React.FC = () => {
    const [ cookies ] = useCookies();

    return (
        <section className="flex flex-col text-primaryText w-full sm:pl-4 overflow-y-auto">
            <div className="flex items-center gap-2 pb-4">
                <Link to="/chat/setting" className="sm:hidden text-primary">
                    <Back size={28}/>
                </Link>

                <h3 className="text-md sm:text-lg">Security</h3>
            </div>

            <SecurityForm cookies={cookies} />
        </section>
    )
}

export default Security;
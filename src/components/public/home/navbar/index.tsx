import React from 'react';
// react router dom
import { Link } from 'react-router-dom';
//  components
import { ProfileImage , ProfileDefault } from './profile';
// packages dependencies
import { Home2 , Chart21 , Message , SearchNormal , Calendar2 , Setting2 } from 'iconsax-react';
// redux
import { useAppSelector } from '../../../../hooks';

const Navbar : React.FC = () => {
    const { user , mobileUI } = useAppSelector(state => state);

    return (
        <div className={`${mobileUI.chatShow ? "hidden" : "flex"} lg:flex flex-col justify-between items-center shadow-xl px-2 py-4 md:p-4`}>
            <div className="flex flex-col items-center">
                {
                    user.user?.profile !== "default.png"
                        ? <ProfileDefault />
                        : <ProfileImage profile={user.user?.profile} />
                }

                <div className="flex flex-col items-center gap-7 mt-14">
                    <Link className="navbarButton" to="/">
                        <Home2 />
                    </Link>

                    <button className="navbarButton">
                        <Message />
                    </button>

                    <button className="navbarButton">
                        <Chart21 />
                    </button>

                    <button className="navbarButton">
                        <SearchNormal />
                    </button>

                    <button className="navbarButton">
                        <Calendar2 />
                    </button>
                </div>
            </div>

            <button className="mb-2 navbarButton">
                <Setting2 />
            </button>
        </div>
    )
}

export default Navbar;
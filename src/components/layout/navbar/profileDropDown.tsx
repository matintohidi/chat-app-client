import React , { Fragment } from 'react';
// packages dependencies
import { Menu , Transition } from '@headlessui/react';
import { HambergerMenu } from 'iconsax-react';
// react router dom
import { NavLink } from 'react-router-dom';
// contracts
import { NavLinkInterface } from '../../../contracts/landing';
import { UserValuesInterface } from "../../../contracts/auth";
// navbar links
const navLinks : NavLinkInterface[] = [
    { name: "Chat", path: "/chat" , id: 0 },
    { name: "Setting", path: "/chat/setting" , id: 1 }
];

interface Props {
    user: UserValuesInterface | undefined
}

const ProfileDropDown : React.FC<Props> = ({ user }) => {
    return (
        <nav className="hidden lg:flex">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="hidden lg:flex lg:w-14 lg:h-14 rounded-full transition hover:ring-2 ring-opacity-70 ring-primary ring-offset-2">
                        {
                            user?.profile
                                ? <img
                                    src={`http://localhost:5000/images/${user?.profile}`}
                                    className="lg:w-14 lg:h-14 rounded-full object-cover"
                                    alt={`${user?.name} profile`}
                                />
                                : <div className="lg:w-14 lg:h-14 rounded-full bg-primary font-Asap text-white text-[22px] flex justify-center items-center">
                                    <span>{user?.name[0]}</span>
                                </div>
                        }
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="origin-top-left absolute right-0 mt-2 w-[9.5rem] rounded-lg shadow-xl bg-white">
                        <div className="px-1 divide-y divide-gray-100">
                            <div>
                                {
                                    navLinks.map(link => {
                                        return (
                                            <Menu.Item key={link.id}>
                                                <NavLink
                                                    to={link.path}
                                                    className="font-InterRegular text-gray-900 group flex w-full items-center rounded-md p-2 my-1 text-sm hover:bg-primary hover:text-white"
                                                >
                                                    {link.name}
                                                </NavLink>
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </div>

                            <div>
                                <Menu.Item>
                                    <button className="font-InterRegular text-gray-900 group flex w-full items-center rounded-md p-2 my-1 text-sm hover:bg-primary hover:text-white">
                                        Logout
                                    </button>
                                </Menu.Item>
                            </div>
                        </div>

                    </Menu.Items>
                </Transition>
            </Menu>
        </nav>
    )
}

export default ProfileDropDown;
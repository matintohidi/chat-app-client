import React , { Fragment } from 'react';
// packages dependencies
import { Menu , Transition } from '@headlessui/react';
import { HambergerMenu } from 'iconsax-react';
// react router dom
import { NavLink , Link } from 'react-router-dom';
// contracts
import { NavLinkInterface } from '../../../contracts/landing';
import { UserValuesInterface } from "../../../contracts/auth";
// navbar links
const navLinks : NavLinkInterface[] = [
    { name: "Home", path: "/" , id: 0 },
    { name: "About", path: "/about" , id: 1 },
    { name: "Contact", path: "/contact" , id: 2 },
];

interface Props {
    user: UserValuesInterface | undefined
}

const MenuDropDown : React.FC<Props> = ({ user }) => {
    return (
        <nav className="lg:hidden">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button>
                        <HambergerMenu
                            color="#292D32"
                        />
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
                    <Menu.Items className="origin-top-left absolute right-0 mt-2 w-[9.5rem] rounded-lg shadow-lg bg-white focus:outline-none">
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

                            {
                                user
                                    ? <div>
                                        <Menu.Item>
                                            <Link
                                                to="/chat"
                                                className="font-InterRegular text-gray-900 group flex w-full items-center rounded-md p-2 my-1 text-sm hover:bg-primary hover:text-white"
                                            >
                                                Chat
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link
                                                to="/chat/setting"
                                                className="font-InterRegular text-gray-900 group flex w-full items-center rounded-md p-2 my-1 text-sm hover:bg-primary hover:text-white"
                                            >
                                                Setting
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link
                                                to="/"
                                                className="font-InterRegular text-gray-900 group flex w-full items-center rounded-md p-2 my-1 text-sm hover:bg-primary hover:text-white"
                                            >
                                                Logout
                                            </Link>
                                        </Menu.Item>
                                    </div>
                                    : <div>
                                        <Menu.Item>
                                            <Link
                                                to="/login"
                                                className="font-InterRegular text-gray-900 group flex w-full items-center rounded-md p-2 my-1 text-sm hover:bg-primary hover:text-white"
                                            >
                                                Login
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link
                                                to="/register"
                                                className="font-InterRegular text-gray-900 group flex w-full items-center rounded-md p-2 my-1 text-sm hover:bg-primary hover:text-white"
                                            >
                                                Register
                                            </Link>
                                        </Menu.Item>
                                    </div>
                            }
                        </div>

                    </Menu.Items>
                </Transition>
            </Menu>
        </nav>
    )
}

export default MenuDropDown;
import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, } from '@headlessui/react';
import { HiMenu, HiX } from 'react-icons/hi'
import { Link, redirect, NavLink as RouterNavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshAuthState, updateAuthState } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, role } = useSelector((state) => state.auth);
    // just in case of debugging
    const state = useSelector((state) => state.auth);
    console.log('authStatusState:', state);

    const getNavigationItems = () => {
        if (!isAuthenticated) {
            return [
                { name: 'Home', to: '/' },
                { name: 'About', to: '/#AboutUs' },
                { name: 'Menu', to: '/#Menu' },
                { name: 'Contact', to: '/#ContactUS' }
            ]
        }
        const base = [{ name: 'Home', to: '/home' }];
        if (role === "user") {
            return [...base, { name: 'Orders', to: '/orders' },
            { name: 'Account', to: '/profile' }
            ];
        }
        if (role === 'admin') {
            return [...base, { name: 'Manage Pizzas', to: '/admin/pizzas' },
            { name: 'Users', to: '/users' },
            { name: 'Orders', to: '/orders' },
            ];
        }
        return base;
    };

    const navigationItems = getNavigationItems();

    const handleLogout = () => {
        dispatch(refreshAuthState());
        // navigate(`/`, { replace: true });
    };

    const CustomLink = ({ item }) => {

        const isAnchor = item.to && typeof item.to === 'string' && item.to.includes('#');

        const baseClasses = "transition-all duration-200 underline-offset-4 hover:underline decoration-[#ff4d4d] decoration-2";
        if (isAnchor) {
            return (
                <a
                    href={item.to}
                    className={`${baseClasses} text-gray`}
                >
                    {item.name}
                </a>
            );
        }
        return (
            <RouterNavLink
                to={item.to}
                className={({ isActive }) =>
                    `transition-all duration-200 underline-offset-4 hover:underline decoration-[#ff4d4d] decoration-2 ${isActive ? "font-xl" : "text-gray"
                    }`
                }
            >
                {item.name}
            </RouterNavLink>
        )
    };

    return (
        <Disclosure as="header" className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg shadow-md">
            {({ open }) => (
                <>
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">

                            <div className="flex-shrink-0">
                                <h1 className="text-2xl sm:text-3xl font-bold text-[#ff4d4d]">
                                    Pizza Paradise
                                </h1>
                            </div>

                            <nav className="hidden md:flex md:items-center md:space-x-6">
                                {navigationItems.map((item) => (
                                    <CustomLink
                                        key={item.name}
                                        item={item}
                                    />
                                ))}

                                {!isAuthenticated ? (
                                    <Link
                                        to="/account/login" 
                                        className="text-blue-500 px-4 py-2 hover:underline decoration-blue-500 decoration-2 underline-offset-4 duration-300"
                                    >
                                        Sign In
                                    </Link>
                                ) : (
                                    <Link
                                        onClick={handleLogout} to='/'
                                        className="hover:underline decoration-[#ff4d4d] decoration-2 underline-offset-4"
                                    >
                                        Logout
                                    </Link>
                                )}
                            </nav>

                            <div className="md:hidden">
                                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff4d4d] transition-colors duration-200">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <HiX className="h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <HiMenu className="h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="md:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3 bg-white/95 backdrop-blur-lg border-t border-gray-200">
                            {navigationItems.map((item) => {
                                const isAnchor = item.to && item.to.includes('#');
                                return (
                                    <DisclosureButton
                                        key={item.name}
                                        as={isAnchor ? "a" : Link}
                                        href={isAnchor ? item.to : undefined}
                                        to={!isAnchor ? item.to : undefined}
                                        className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#ff4d4d] transition-colors duration-200"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                )
                            })}

                            <div className="px-3 pt-2">
                                {!isAuthenticated ? (
                                    <DisclosureButton
                                        as={Link}
                                        to="/account/login"
                                        className="block w-full text-center bg-[#ff4d4d] text-white px-4 py-2 rounded-lg hover:bg-[#e63946] transition-colors duration-200"
                                    >
                                        Sign In
                                    </DisclosureButton>
                                ) : (
                                    <button
                                        onClick={handleLogout} to='/'
                                        className="w-full bg-[#ff4d4d] text-white px-4 py-2 rounded-lg hover:bg-[#e63946] transition-colors duration-200"
                                    >
                                        Logout
                                    </button>
                                )}
                            </div>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
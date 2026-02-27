import React, { useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, } from '@headlessui/react';
import { HiMenu, HiX } from 'react-icons/hi'
import { Link, redirect, NavLink as RouterNavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshAuthState, updateAuthState } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { refreshProfileState } from '../../features/user/profileSlice';
import useManualFetch from '../../shared/hooks/useManualFetch';
import { toast } from 'react-toastify';
import { ShoppingCart } from 'lucide-react';
import { selectTotalItems, selectIsCartOpen, toggleCart } from '../../features/Cart/cartSlice';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, role } = useSelector((state) => state.auth);
    // just in case of debugging

    const totalItems = useSelector(selectTotalItems);


    const { execute, data, error, status } = useManualFetch();
    const state = useSelector((state) => state.auth);
    console.log('authStatusState:', state);

    const profstate = useSelector((state) => state.profile);
    console.log('profile:', profstate);

    const cartstate = useSelector((state) => state.cart);
    console.log("Cartstate:", cartstate);

    const getNavigationItems = () => {
        if (!isAuthenticated) {
            return [
                { name: 'Home', to: '/' },
                { name: 'About', to: '/#AboutUs' },
                { name: 'Menu', to: '/#Menu' },
                { name: 'Contact', to: '/#ContactUS' }
            ]
        }
        // !change for side bar
        // const base = [{ name: 'Home', to: '/home' }];
        if (role === "user") {
            return [
                { name: 'Home', to: '/home' },
                { name: 'Orders', to: '/orders' },
                { name: 'Account', to: '/profile' }
            ];
        }
        if (role === 'admin') {
            return [
                { name: 'Home', to: '/admin-home' },
                { name: 'Account', to: '/profile' }
            ];
        }
        return base;
    };

    const navigationItems = getNavigationItems();

    const handleLogout = async () => {

        await execute("/auth/logout",
            "POST");
        dispatch(refreshAuthState());
        dispatch(refreshProfileState());
        navigate("/");
    };

    useEffect(() => {
        if (status == "success" && data) {
            toast.success("Logout successfully!");
        }
    }, [status, data]);

    const CustomLink = ({ item }) => {

        const isAnchor = item.to && typeof item.to === 'string' && item.to.includes('#');

        const baseClasses = "transition-all duration-200 underline-offset-4 hover:underline decoration-[#ff4d4d] decoration-2";
        if (isAnchor) {
            return (
                <a
                    href={item.to}
                    className={`${baseClasses} text-gray-900`}
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
        <Disclosure as="header" className={`fixed top-0 left-0 right-0 max-w-full z-50 ${role === "admin" ? "bg-gray-100" : "bg-white"} backdrop-blur-lg overflow-x-hidden`}>
            {({ open }) => (
                <>
                    <div className={`${role === "admin" ? "w-full" : "max-w-6xl"} mx-auto px-4 sm:px-6`}>
                        <div className="flex justify-between items-center h-16">

                            <div className="flex-shrink-0">
                                <h1 className="text-2xl sm:text-3xl font-bold text-[#ff4d4d]">
                                    Pizza Paradise
                                </h1>
                            </div>

                            <nav className="hidden md:flex md:items-center space-x-4 md:space-x-6">
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

                                {role === "user" ? (
                                    <button
                                        onClick={() => dispatch(toggleCart(true))}
                                        className='relative p-2 rounded-lg hover:bg-muted transition-colors"'
                                    >
                                        <ShoppingCart className='text-gray-900 hover:text-[#ff4d4d] ' />
                                        {totalItems > 0 && (
                                            <span
                                                className='absolute -top-1 -right-1 bg-gray-200
                                                text-[#ff4d4d]-foreground text-xs font-bold 
                                                rounded-full w-5 h-5 flex items-center justify-center'>
                                                {totalItems}
                                            </span>
                                        )}
                                    </button>
                                ) : null}
                                {/* 
                                {!isAuthenticated && role === null ? (
                                    <ShoppingCart className='text-gray-900 hover:text-[#ff4d4d] ' />
                                ) : null} */}

                            </nav>

                            <div className="md:hidden flex-shrink-0">
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

                            {role === "user" ? (
                                <button
                                    onClick={() => dispatch(toggleCart(true))}
                                    className='relative p-2 rounded-lg hover:bg-muted transition-colors"'
                                >
                                    <ShoppingCart className='text-gray-900 hover:text-[#ff4d4d] ' />
                                    {totalItems > 0 && (
                                        <span
                                            className='absolute -top-1 -right-1 bg-gray-200
                                                text-[#ff4d4d]-foreground text-xs font-bold 
                                                rounded-full w-5 h-5 flex items-center justify-center'>
                                            {totalItems}
                                        </span>
                                    )}
                                </button>
                            ) : null}

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
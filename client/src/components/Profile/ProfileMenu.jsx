const ProfileMenu = () => {

    const menuOptions = [
        { label: "Edit Profile", href: "/me/update/profile" },
        { label: "Security", href: '/me/security' },
        { label: "Notifications", href: '/me/notifications' },
        { label: "Favorites", href: '/me/favourites' },
        { label: "Support", href: "#" },
        { label: "Settings", href: "#" }
    ]
    return (
        <>
            <div className="w-64 bg-gradient-to-r from-gray-200 to-white min-h-screen p-6 shadow-lg">
                {/* sidebar header */}
                <div className="mb-8">
                    <h2 className="text-[#ff4d4d] text-2xl font-bold">Menu</h2>
                    <p className="text-black text-sm mt-1">Your Options</p>
                </div>

                {/* Menu Items */}
                <nav>
                    {menuOptions.map((option, index) => (
                        <a key={index}
                            href={option.href}
                            className="flex items-center gap-3 px-4 py-3 
                            rounded-lg text-black hover:bg-[#ff4d4d]
                            transition-all duration-200 hover:translate-x-1
                            cursor-pointer group"
                        >
                            <span className="font-medium group-hover:font-semibold">{option.label}</span>
                        </a>
                    ))}
                </nav>
                {/* footer */}
                <div className="mt-12 pt-6 border-t border-gray-900">
                    <p className="text-center text-xs text-black">Pizza Paradise Menu Panel</p>
                </div>
            </div>
        </>
    );
};

export default ProfileMenu;
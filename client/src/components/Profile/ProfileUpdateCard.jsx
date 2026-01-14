import ProfileAvtar from "./ProfileAvtar";
import ProfileMenu from "./ProfileMenu";

const ProfileUpdateCard = ({ handleEdit, form, setters }) => {
    const { name, email, address, city, state, pincode } = form;
    const {
        setName,
        setEmail,
        setAddress,
        setCity,
        setState,
        setPincode
    } = setters;
    // just for debugging
    // const state = useSelector((state) => state.profile);
    // console.log('profilestatus', state);

    return (
        <div className="min-h-screen bg-gradient-to-l from-gray-200 to-white flex">
            <ProfileMenu />
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-2xl hover:shadow-2xl transition-shadow duration-300">
                    <h1 className="p-4 font-semibold text-left text-xl">Edit Profile</h1>
                    <div className="h-32 relative overflow-hidden"></div>
                    <div className="px-6 pb-8 -mt-16 relative z-10">
                        <div className="flex justify-center mb-6">
                            <ProfileAvtar />
                        </div>
                        <div>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" onSubmit={handleEdit}>
                                <div className="md:col-span-2">
                                    <label className="text-sm font-semibold mb-1 block">Name</label>
                                    <input
                                        value={name}
                                        className="w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300"
                                        placeholder="Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-sm font-semibold mb-1 block">Email</label>
                                    <input
                                        className="w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="text-sm font-semibold mb-1 block">Address</label>
                                    <input
                                        className="w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300"
                                        placeholder="Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold mb-1 block">City</label>
                                    <input
                                        className="w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300"
                                        placeholder="City"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold mb-1 block">State</label>
                                    <input
                                        className="w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300"
                                        placeholder="State"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold mb-1 block">PinCode</label>
                                    <input
                                        className="w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300"
                                        placeholder="Pincode"
                                        value={pincode}
                                        onChange={(e) => setPincode(e.target.value)}
                                    />
                                </div>
                                <div className="md:gap-end flex justify-end gap-4 mt-6">
                                    <button className="bg-[#ff4d4d]  px-3 py-1 rounded-sm text-black 
                                hover:bg-[#ff4d4d] hover:text-white transition-all">
                                        Save Changes...
                                    </button>
                                    <button className="bg-gray-400 px-3 py-1 rounded-sm text-black 
                                    hover:text-white transition-all" to="/profile/">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdateCard;
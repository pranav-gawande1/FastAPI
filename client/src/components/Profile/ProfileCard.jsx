import ProfileAvtar from "./ProfileAvtar";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import ProfileMenu from "./ProfileMenu";

const ProfileCard = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-l from-gray-200 to-white flex">
                <ProfileMenu />
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="h-32 relative overflow-hidden"></div>
                        <div className="px-6 pb-8 -mt-16 relative z-10">
                            <div className="flex justify-center mb-6">
                                <ProfileAvtar />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <PersonalInfo  />
                                <AddressInfo className="bg-white shadow-md"
                                             titlestyle="text-center text-xl font-bold mb-6"
                                             subdivdivstyle="p-6 w-full max-w-md mx-auto"
                                             textcolor="text-[#ff4d4d]"
                                             structure="space-y-4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileCard;
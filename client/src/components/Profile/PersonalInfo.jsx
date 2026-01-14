import { CheckCircle2, User, Mail, Briefcase } from "lucide-react"
import { useSelector } from "react-redux";

const PersonalInfo = () => {
    const { name, email, role, status } = useSelector((state) => state.profile);
    // const status = ;
    // if () return <p>Loading...</p>;
    return (
        <>
            <div className="bg-white p-6 shadow-md w-full max-w-md mx-auto">
                <h1 className="text-center text-xl font-bold mb-6">Personal Info</h1>
                <div className="px-1 py-1 space-y-8">
                    {/* name */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-[#ff4d4d]" />
                            <label className="text-xs font-bold uppercase tracking widest text-[#ff4d4d]">Name</label>
                        </div>
                        <p className="text-base md:text-xl lg:text-2xl font-bold text-gray-900">{name}</p>
                    </div>
                    {/* email */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[#ff4d4d]" />
                            <label className="text-xs font-bold uppercase tracking widest text-[#ff4d4d]">Email</label>
                        </div>
                        <p className="font-medium">{email}</p>

                    </div>
                    {/* Role */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-[#ff4d4d]" />
                            <label className="text-xs font-bold uppercase tracking widest text-[#ff4d4d]">Role</label>
                        </div>
                        <p className="font-semibold text-sm uppercase">{role}</p>
                    </div>
                    {/* status */}
                    <div className="space-y-3">
                        <div>
                            <label className="text-xs font-bold uppercase tracking widest text-[#ff4d4d]">Status</label>
                        </div>
                        <p className="inline-flex items-center gap-2 border border-green-600 rounded-full px-1">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className={`ml-2 font-medium ${status
                                ? "text-green-600"
                                : "text-red-500"
                                }`}>{status ? "Active" : "Blocked"}</span>
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
};
export default PersonalInfo;
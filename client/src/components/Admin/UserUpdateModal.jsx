import Modal from "../Modal/Modal";
import { useState } from "react";
import { CheckCircle2, User, Mail, Briefcase } from "lucide-react"

const UserUpdateModel = ({ user, isOpen, onClose, onSuccess, actionType }) => {
    const [role, setRole] = useState(user?.role);
    const [status, setStatus] = useState(user?.is_active ? "Active" : "Blocked");
    if(!isOpen || !user) return null;
    if (actionType === "edit") {
        return (
            <>
                <Modal isOpen={isOpen} onClose={onClose} title="Update User">
                    <div className="flex flex-col gap-3">
                        <input
                        className="input"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="User role"
                    />

                    <input
                        className="input mt-3"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        placeholder="User status"
                    />

                    <button
                        // onClick={handleUpdate}
                        // disabled={loading}
                        className="btn-primary w-full mt-4"
                    >
                        {/* {loading ? "Updating..." : "Update"} */}
                        Update
                    </button>
                    </div>
                </Modal>
            </>
        );
    } else if (actionType === "view") {
        return (
                <Modal isOpen={isOpen} onClose={onClose} title="User">
                    <div className="bg-white p-6 shadow-md w-full max-w-md mx-auto">
                        <div className="px-1 py-1 space-y-8">
                            {/* name */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-[#ff4d4d]" />
                                    <label className="text-xs font-bold uppercase tracking widest text-[#ff4d4d]">Name</label>
                                </div>
                                <p className="text-base md:text-xl lg:text-2xl font-bold text-gray-900">{user.name}</p>
                            </div>
                            {/* email */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-[#ff4d4d]" />
                                    <label className="text-xs font-bold uppercase tracking widest text-[#ff4d4d]">Email</label>
                                </div>
                                <p className="font-medium">{user.email}</p>

                            </div>
                            {/* Role */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-[#ff4d4d]" />
                                    <label className="text-xs font-bold uppercase tracking widest text-[#ff4d4d]">Role</label>
                                </div>
                                <p className="font-semibold text-sm">{user.role}</p>
                            </div>
                            {/* status */}
                            <div className="space-y-3">
                                <div>
                                    <label className="text-xs font-bold uppercase tracking widest text-[#ff4d4d]">Status</label>
                                </div>
                                <p className="inline-flex items-center gap-2 border border-green-600 rounded-full px-1">
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                    <span className={`ml-2 font-medium ${user.is_active
                                        ? "text-green-600"
                                        : "text-red-500"
                                        }`}>{user.is_active ? "Active" : "Blocked"}</span>
                                </p>
                            </div>
                        </div>
                    </div >
                </Modal>
        );
    }
};

export default UserUpdateModel;
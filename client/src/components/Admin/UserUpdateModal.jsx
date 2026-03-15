import Modal from "../Modal/Modal";
import { useState } from "react";
import { CheckCircle2, User, Mail, Briefcase, ShieldX } from "lucide-react"
import useManualFetch from "../../shared/hooks/useManualFetch";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ProfileAvtar from "../Profile/ProfileAvtar";
import { updateItem } from "../../shared/utils/stateUpdater";

const UserUpdateModel = ({ user, isOpen, onClose, actionType, setUsers }) => {
    const [role, setRole] = useState("");
    const [is_active, setis_active] = useState("");

    const { execute, data, status, error } = useManualFetch();
    useEffect(() => {
        if (actionType === "edit" && user) {
            setRole(user.role || "");
            setis_active(user.is_active || "");
        }
    }, [actionType, user]);

    const handleEdit = async () => {
        if (!user) return;

        const updateData = {};

        if (role !== user.role) updateData.role = role;
        if (is_active !== user.is_active) updateData.is_active = is_active;

        if (Object.keys(updateData).length === 0) {
            toast.info("No changes made");
            return;
        }
        await execute(`/users/admin/user/${user._id}`, "PATCH", updateData);
    };

    useEffect(() => {
        if (status == "success" && data) {
            updateItem(setUsers, data?.data);
            toast.success("User updated successfully!");
            onClose();
        }
    }, [status, data]);

    useEffect(() => {
        if (error) {
            toast.error("Something went wrong!");
        }
    }, [error]);

    if (!isOpen || !user) return null;
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} title={actionType === "edit" ? "Update User" : "User"}>
                {actionType === "edit" ? (
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-center mb-6">
                            <ProfileAvtar />
                        </div>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full py-2 px-3 border border-gray-400 rounded-md bg-gray-100"
                        >
                            <option value="">Select Role</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>

                        <label className="w-full py-2 px-3 border border-gray-400 rounded-md bg-gray-100 flex gap-2">
                            <span className="text-sm font-medium">Active</span>

                            <input
                                type="checkbox"
                                checked={is_active}
                                onChange={(e) => setis_active(e.target.checked)}
                                className="w-5 h-5"
                            />
                        </label>

                        <button
                            onClick={handleEdit}
                            disabled={status === "loading"}
                            className="w-full bg-red-500 text-white py-2 rounded-md 
             hover:bg-red-600 transition disabled:opacity-50"
                        >
                            {status === "loading" ? "Updating..." : "Update User"}
                        </button>
                    </div>
                ) : (
                    <div className="bg-white p-6 shadow-md w-full max-w-md mx-auto">
                        <div className="px-1 py-1 space-y-8">
                            {/*profile picture  */}
                            <div className="flex justify-center mb-6">
                                <ProfileAvtar />
                            </div>
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
                                <p className={`inline-flex items-center border ${user.is_active ?
                                    "border-green-600" : "border-red-600"
                                    } rounded-full px-1`}>
                                    <span >
                                        {user.is_active ? <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            : <ShieldX className="w-4 h-4 text-red-600" />
                                        }
                                    </span>

                                    <span className={`ml-2 font-medium ${user.is_active
                                        ? "text-green-600"
                                        : "text-red-500"
                                        }`}>{user.is_active ? "Active" : "Blocked"}</span>
                                </p>
                            </div>
                        </div>
                    </div >
                )}
            </Modal>
        </>
    );
};

export default UserUpdateModel;
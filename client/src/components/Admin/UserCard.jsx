import { FaUserCircle, FaEllipsisV } from "react-icons/fa";
import { useState } from "react";

const UserCard = ({ user, onEdit, onView, onDelete }) => {
    const [IsMenuOpen, setisMenuOpen] = useState(false);
    return (
        <>
            <tr className="bg-white" onClick={() => setisMenuOpen(!IsMenuOpen)}>
                <td className="px-6 py-4">
                    <div className="flex item-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-900">
                            <FaUserCircle className="w-6 h-6" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                            <p className="textxs text-gray-600 truncate">{user.email}</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{user.email}</p>
                </td>
                <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-200 rounded-full">
                        {user.role}
                    </span>
                </td>
                <td className="px-6 py-4">
                    <span
                        className={`inline-flex items-center gap-2 px-3 py-1 text-xs 
                    font-medium rounded-full ${user.is_active ? "bg-green-900/30 text-green-900" : "bg-red-900/30 text-red-900"}`}>
                        <span className={`w-2 h-2 rounded-full ${user.is_active ? "bg-green-500" : "bg-red-500"}`}></span>
                        {user.is_active ? "Active" : "Blocked"}
                    </span>
                </td>
                <td>
                    <div className="relative">
                        <button
                            className="text-gray-900 hover:text-gray-500 transitions-colors">
                            <FaEllipsisV className="w-4 h-4" />
                        </button>
                        {IsMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48
                            bg-gray-800 rounded-lg  shadow-xl z-10">
                                <button onClick={() => onEdit(user)
                                }
                                    className="block text-gray-200
                                w-full text-left px-4 py-2 text-sm hover:bg-gray-700
                                hover:rounded-lg transitions-colors
                                ">Edit User</button>
                                <button onClick={() => onView(user)
                                }
                                    className="block text-gray-200
                                w-full text-left px-4 py-2 text-sm hover:bg-gray-700
                                transitions-colors
                                ">View User</button>
                                <button onClick={() => onDelete(user)
                                }
                                    className="block text-red-400
                                w-full text-left px-4 py-2 text-sm hover:bg-gray-700
                                hover:rounded-lg transitions-colors
                                ">Delete User</button>
                            </div>
                        )
                        }
                    </div>
                </td>
            </tr>
        </>
    );
};
export default UserCard;
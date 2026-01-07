import { useState } from "react";
import UserCard from "./UserCard";
import { FaSearch, FaFilter } from "react-icons/fa";
import UserUpdateModel from "./UserUpdateModal";

const UserTable = ({ users = [] }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [selectedUser, setSelectedUser] = useState(null);
    const [actionType, setActionType] = useState(null);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setActionType("edit");
    };

    const handleView = (user) => {
        setSelectedUser(user);
        setActionType("view");
    }

    const handleDelete = (user) => {
        setSelectedUser(user);
        setActionType("delete");
    }

    const filteredUsers = users.filter((user) => {
        const matchesSearch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesStatus =
            filterStatus === "all" ||
            (filterStatus === "active" && user.is_active) ||
            (filterStatus === "blocked" && !user.is_active)
        return matchesSearch && matchesStatus
    })

    return (
        <>
            <div className="w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                {/* filtered section */}
                <div>
                    <div className="flex flex-col sm:flex-row gap-3 p-3">
                        <div className="flex-1 relative">
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name or email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-white
                                border border-gray-700 rounded-lg text-white
                                placeholder-gray-500 focus:outline-none
                                focus:ring-2 focus:ring-red-500 transition-all"/>
                        </div>
                        <div className="flex items-center gap-2 bg-white
                        border border-gray-700 rounded-lg px-4 py-2">
                            <FaFilter className="text-gray-400" />
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="bg-transparent text-gray-900 text-sm focus:outline-none cursor-pointer">
                                <option value="all"
                                    className="text-gray-800">All Users</option>
                                <option value="active"
                                    className="text-gray-800">Active</option>
                                <option value="blocked"
                                    className="text-gray-800">Blocked</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Table section */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-200 ">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs
                                font-semibold text-gray-900 uppercase tracking-wider">
                                    User
                                </th>
                                <th className="px-6 py-3 text-left text-xs
                                font-semibold text-gray-900 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs
                                font-semibold text-gray-900 uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs
                                font-semibold text-gray-900 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs
                                font-semibold text-gray-900 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => <UserCard key={user.id}
                                    user={user} onEdit={handleEdit} onView={handleView} onDelete={handleDelete}/>)
                            ) : (
                                <tr className="items-center">
                                    <td className="px-6 py-8 text-center text-gray-400">
                                        <p className="text-sm">No users found matching your criteria</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <UserUpdateModel
                        user={selectedUser}
                        isOpen={!!selectedUser}
                        actionType={actionType}
                        onClose={() => setSelectedUser(null)}
                    />
                </div>

                {/* footer sectio */}
                <div className="px-6 py-4 bg-gray-200
                 flex items-center justify-between text-sm text-gray-900">
                    <p>
                        Showing {filteredUsers.length} of {users.length} users
                    </p>
                    <div className="flex gap-4">
                        <button className="text-gray-900 hover:text-gray-500 transitions-colors">
                            ← Previous
                        </button>
                        <button className="text-gray-900 hover:text-gray-500 transitions-colors">
                            Next →
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default UserTable;
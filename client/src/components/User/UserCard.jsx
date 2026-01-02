import React from "react";
import { FaUserCircle } from "react-icons/fa";

const UserCard = ({ user }) => {
    return (
        <>
            <ui className="divide-y divide-white/5">
                <li className="flex justify-between gap-x-6 py-5 list-none">
                    <div className="flex min-w-0 gap-x-4">
                        <i className="size-12 flex-none "><FaUserCircle /></i>
                        <div className="min-w-0 flex-auto">
                            <h1 className="text-sm/6 font-semibold text-white">{user.name}</h1>
                            <h3 className="mt-1 truncate text-xs/5 text-gray-400">{user.email}</h3>
                        </div>
                        <div className="shrink-0 sm:flex sm:flex-col sm:item-end">
                            <p className="text-sm/6 text-white">{user.role}</p>
                            <p className="mt-1 text-xs/5 text-gray-400">{user.is_active ? "Active" : "Blocked"}</p>
                        </div>
                    </div>
                </li>
            </ui>
        </>
    );
};
export default UserCard;
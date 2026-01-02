import React from "react";
import UserCard from "./userCard";
import user from "../../constant/userData";

const UserList = () => {
    return (
        <>
            <div className="bg-gray-700 p-8 mx-auto max-w-[900px] justify-center">
                {user.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </>
    );
};
export default UserList;
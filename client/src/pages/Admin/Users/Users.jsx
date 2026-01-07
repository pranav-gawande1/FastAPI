import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Landing/Footer";
import UserTable from "../../../components/Admin/UserTable";
import user from "../../../constant/userData";

const Users = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16 bg-white">
                <div className="max-w-full mx-auto p-8">
                    <UserTable users={user} />
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Users;
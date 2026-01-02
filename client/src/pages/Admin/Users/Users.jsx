import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Landing/Footer";
import UserList from "../../../components/User/userList";

const Users = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <UserList />
                <Footer />
            </main>
        </>
    );
};

export default Users;
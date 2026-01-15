import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Landing/Footer";
import UserTable from "../../../components/Admin/UserTable";
// import user from "../../../constant/userData";
import useFetch from "../../../shared/hooks/useFetch";
import Loader from "../../../components/Loader/Loader";
import ErrorState from "../../../components/Loader/NotFound";
import { useState } from "react";
import { useEffect } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const { data, loading, error } = useFetch(`/users/users`)

    const handleDeletedUser = async (userId) => {
        setUsers(prev => prev.filter(user => user._id != userId))
    };

    useEffect(() => {
        if (data?.users) {
            setUsers(data.users);
        }
    }, [data]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="mt-16">
                {loading && <Loader />}
                {error && <ErrorState />}
                {!loading && !error && (
                    <div className="max-w-full mx-auto p-8">
                        <UserTable users={users}
                            onUserDelete={handleDeletedUser}
                        />
                    </div>
                )}
                <Footer />
            </main>
        </div>
    );
};

export default Users;
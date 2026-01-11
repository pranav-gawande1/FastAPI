import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Landing/Footer";
import UserTable from "../../../components/Admin/UserTable";
// import user from "../../../constant/userData";
import useFetch from "../../../shared/hooks/useFetch";
import Loader from "../../../components/Loader/Loader";
import ErrorState from "../../../components/Loader/NotFound";

const Users = () => {
    const { data, loading, error } = useFetch(`/users/getallusers`)
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="mt-16 flex-1 bg-white flex flex-col items-center justify-center">
                {loading && <Loader />}
                {error && <ErrorState />}
                {!loading && !error && (
                    <div className="max-w-full w-full p-8">
                        <UserTable users={data?.users} />
                    </div>
                )}
                <Footer />
            </main>
        </div>
    );
};

export default Users;
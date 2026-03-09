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
import SideBar from "../../../components/Admin/SideBar/SideBar";
import SideBarToggle from "../../../components/Admin/SideBar/sideBarToggle";
import { useSelector } from "react-redux";

const Users = () => {
    const [users, setUsers] = useState([]);
    const { data, loading, error } = useFetch(`/users/users`);
    const { isOpen } = useSelector((state) => state.sideBarStatus);

    const handleDeletedUser = async (userId) => {
        setUsers(prev => prev.filter(user => user._id != userId))
    };

    useEffect(() => {
        if (data?.users) {
            setUsers(data.users);
        }
    }, [data]);

    return (
        <>
            {/* <div className="min-h-screen flex flex-col"> */}
                <Navbar />
                <div className="flex mt-16">
                    <SideBarToggle />
                {isOpen && <SideBar />}
                    <div className={`flex-1  ${isOpen ? "ml-50": "ml-0"} w-full transition-all duration-300`}>
                        {loading && <Loader />}
                        {error && <ErrorState />}
                        {!loading && !error && (
                            <div className="p-8 max-w-full mx-auto">
                                <UserTable users={users}
                                    onUserDelete={handleDeletedUser}
                                />
                            </div>
                        )}
                    </div>
                </div>
            {/* </div> */}
            {/* <Footer /> */}
        </>
    );
};

export default Users;
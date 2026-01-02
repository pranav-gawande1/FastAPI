import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProtectedPage = ({ adminOnly = false }) => {

    const { isAuthenticated, role } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!isAuthenticated) {
            toast.error("Please login first!");
        } else if (adminOnly && role !== "admin") {
            toast.error("You are not authorised to access this Page!");
        }
    }, [isAuthenticated, role, adminOnly]);

    if (!isAuthenticated) return <Navigate to="/account/login" />;
    if (adminOnly && role !== "admin") return <Navigate to="/home" />

    return <Outlet />;
};
export default ProtectedPage;
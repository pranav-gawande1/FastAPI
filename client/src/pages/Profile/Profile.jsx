import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer";
import ProfileCard from "../../components/Profile/ProfileCard";
import useFetch from "../../shared/hooks/useFetch";
import ErrorState from "../../components/Loader/NotFound";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProfileState } from "../../features/user/profileSlice";

const Profile = () => {
    const dispatch = useDispatch();

    const { data, loading, error } = useFetch('/users/me');

    useEffect(() => {
        if (!loading && !error && data) {
            dispatch(updateProfileState({
                name: data.user.name,
                email: data.user.email,
                role: data.user.role,
                status: data.user.is_active ? "Active" : "Blocked",
                address: data.user.address,
                city: data.user.city,
                state: data.user.state,
                pincode: data.user.pincode
            }));
        }
    }, [ data, dispatch]);

    if (loading) return (
        <>
            <Navbar />
            <main className="mt-16">
                <Loader />
            </main>
        </>
    );
    
    if (error) return (
        <>
            <Navbar />
            <main className="mt-16">
                <ErrorState />
            </main>
        </>
    );

    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div className="max-w-[1200px] mx-auto p-4">
                    <ProfileCard />
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Profile;
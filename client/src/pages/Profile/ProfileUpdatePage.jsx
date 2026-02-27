import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Landing/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProfileUpdateCard from "../../components/Profile/ProfileUpdateCard";
import { useEffect, useState } from "react";
import { updateProfileState } from "../../features/user/profileSlice";
import { toast } from "react-toastify";
import useManualFetch from "../../shared/hooks/useManualFetch";

const ProfileUpdatePage = () => {
    const { isOpen } = useSelector((state) => state.sideBarStatus);
    const dispatch = useDispatch();
    const {
        name: profileName,
        email: profileEmail,
        address: profileAddress,
        city: profileCity,
        state: profileState,
        pincode: profilePincode
    } = useSelector((state) => state.profile);

    const [name, setName] = useState(profileName || "");
    const [email, setEmail] = useState(profileEmail || "");
    const [address, setAddress] = useState(profileAddress || "");
    const [city, setCity] = useState(profileCity || "");
    const [state, setState] = useState(profileState || "");
    const [pincode, setPincode] = useState(profilePincode || "");

    const { execute, data, status, error } = useManualFetch();

    const handleUpdateForm = async (e) => {
        e.preventDefault();

        await execute(`/users/user`, "PATCH",
            {
                name,
                email,
                address,
                city,
                state,
                pincode
            }
        );
    };

    useEffect(() => {
        if (status == "success" && data) {
            dispatch(updateProfileState({
                name: data.usertoUpdate.name,
                email: data.usertoUpdate.email,
                address: data.usertoUpdate.address,
                city: data.usertoUpdate.city,
                state: data.usertoUpdate.state,
                pincode: data.usertoUpdate.pincode
            }));

            toast.success("Profile update successful!");
        }

        if (status === "error") {
            toast.error(error?.message || "Update failed");
        }
    }, [status, data, error, dispatch]);

    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div className="max-w-[1200px] mx-auto p-4">
                    <ProfileUpdateCard
                        form={{
                            name,
                            email,
                            address,
                            city,
                            state,
                            pincode,
                        }}
                        setters={{
                            setName,
                            setEmail,
                            setAddress,
                            setCity,
                            setState,
                            setPincode,
                        }}
                        handleEdit={handleUpdateForm} />
                </div>
                <Footer />
            </main>
        </>
    );
};

export default ProfileUpdatePage;
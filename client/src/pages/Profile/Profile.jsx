import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer";
import ProfileCard from "../../components/Profile/ProfileCard";
import useFetch from "../../shared/hooks/useFetch";
// import userInfo from "../../constant/userInfo";
// import { useEffect } from "react";

const Profile = () => {

    const {data, loading, error } = useFetch('/user/me');

    if(loading) return <p>Loading....</p>;
    if(error) return <p>Something Went wrong...</p>;
    

    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div className="max-w-[1200px] mx-auto p-4">
                    <ProfileCard user={data?.user}/>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Profile;
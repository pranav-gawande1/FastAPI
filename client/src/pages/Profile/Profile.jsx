import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer";
import ProfileCard from "../../components/Profile/ProfileCard";
import useFetch from "../../shared/hooks/useFetch";
import ErrorState from "../../components/Loader/NotFound";
import Loader from "../../components/Loader/Loader";

const Profile = () => {

    const { data, loading, error } = useFetch('/users/me');

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
                    <ProfileCard user={data?.user} />
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Profile;
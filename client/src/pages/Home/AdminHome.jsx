import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Landing/Footer.jsx"
import Hero from "../../components/Landing/Hero.jsx";
import PizzaList from "../../components/Products/PizzaList.jsx";
import SideBar from "../../components/Admin/SideBar/SideBar.jsx";


const AdminHome = () => {
    return (
        <>
            <Navbar />
            <div className="flex mt-16 min-h-screen">
                <div className="w-64 bg-gray-900 text-white fixed h-full">
                    <SideBar />
                </div>
                <div className="ml-64 flex-1">
                    <Hero />
                    <PizzaList />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default AdminHome;
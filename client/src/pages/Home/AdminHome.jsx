import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Landing/Footer.jsx"
import Hero from "../../components/Landing/Hero.jsx";
import PizzaList from "../../components/Products/PizzaList.jsx";
import SideBar from "../../components/Admin/SideBar/SideBar.jsx";
import { FaBars } from "react-icons/fa";
import { useState } from "react";


const AdminHome = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <Navbar />
            <div className="flex mt-16">
                {isHovered && <SideBar isHovered={isHovered} />}
                <div className="flex-1 p-6 bg-gray-100 min-h-screen">
                    {!isHovered && <button onClick={() => setIsHovered(!isHovered)}>
                        <FaBars />
                    </button>}
                    <Hero />
                    <PizzaList />
                </div>
            </div>
        </>
    );
}

export default AdminHome;
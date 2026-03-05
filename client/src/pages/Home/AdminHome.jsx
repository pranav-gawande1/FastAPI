import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Landing/Hero.jsx";
import PizzaList from "../../components/Products/PizzaList.jsx";
import SideBar from "../../components/Admin/SideBar/SideBar.jsx";
import { useSelector } from "react-redux";
import SideBarToggle from "../../components/Admin/SideBar/sideBarToggle.jsx";


const AdminHome = () => {
    const { isOpen } = useSelector((state) => state.sideBarStatus);
    return (
        <>
            <Navbar />
            <div className="flex mt-16">
                <SideBarToggle />
                {isOpen && <SideBar />}
                <div className={`flex-1  ${isOpen ? "ml-40": "ml-0"} w-full transition-all duration-300`}>
                    <Hero />
                    <PizzaList />
                </div>
            </div>
        </>
    );
}

export default AdminHome;
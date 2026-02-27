import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Landing/Hero.jsx";
import PizzaList from "../../components/Products/PizzaList.jsx";
import SideBar from "../../components/Admin/SideBar/SideBar.jsx";
import { useSelector } from "react-redux";


const AdminHome = () => {
    const { isOpen } = useSelector((state) => state.sideBarStatus);
    return (
        <>
            <Navbar />
            <div className="flex mt-16">
                {isOpen && <SideBar />}
                <div className="flex-1 bg-gray-100 min-h-screen">
                    <Hero />
                    <PizzaList />
                </div>
            </div>
        </>
    );
}

export default AdminHome;
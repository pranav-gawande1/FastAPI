import { FaPizzaSlice, FaShoppingCart, FaUsers } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { RiDashboard2Fill } from "react-icons/ri"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {
    const { isHovered, isOpen } = useSelector((state) => state.sideBarStatus);
    return (
        // <div className={`min-h-screen fixed bg-gray-100 text-gray-900 transition-all duration-300 overflow-y-auto`}>
        <div className={`fixed h-screen ${isOpen ? "w-48" : "w-16"} bg-gray-100 transition-all duration-300 overflow-y-auto`}>
            <ul className="mt-6 space-y-2">
                <Link className="flex items-center gap-2 p-4 cursor-pointer transition-all duration-200 underline-offset-4 hover:underline decoration-[#ff4d4d] decoration-2"
                    to='/admin/analytics'
                >
                    <SiGoogleanalytics />
                    {isOpen && <span>Analytics</span>}
                </Link>
                <Link className="flex items-center gap-2 p-4 cursor-pointer transition-all duration-200 underline-offset-4 hover:underline decoration-[#ff4d4d] decoration-2"
                    to='/admin/pizzas'
                >
                    <FaPizzaSlice />
                    {isOpen && <span>Manage Pizzas</span>}
                </Link>
                <Link className="flex items-center gap-2 p-4 cursor-pointer transition-all duration-200 underline-offset-4 hover:underline decoration-[#ff4d4d] decoration-2"
                    to='/users'
                >
                    <FaUsers />
                    {isOpen && <span>Users</span>}
                </Link>
                <Link className="flex items-center gap-2 p-4 cursor-pointer transition-all duration-200 underline-offset-4 hover:underline decoration-[#ff4d4d] decoration-2"
                    to='/admin/orders'
                >
                    <FaShoppingCart />
                    {isOpen && <span>Orders</span>}
                </Link>
                
                {/* <Link className="flex items-center gap-2 p-4 cursor-pointer transition-all duration-200 underline-offset-4 hover:underline decoration-[#ff4d4d] decoration-2"
                    to='/admin/analytics/table'
                >
                    <RiDashboard2Fill />
                    {isOpen && <span>Dashboard</span>}
                </Link> */}
            </ul>
        </div>
    )
}
export default SideBar;
import { FaPizzaSlice, FaShoppingCart, FaUsers } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { RiDashboard2Fill } from "react-icons/ri"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {
    const { isHovered, isOpen } = useSelector((state) => state.sideBarStatus);
        return (
            <div className={`h-screen bg-gray-100 text-gray-900 transition-all duration-300`}>
                <ul className="mt-6 space-y-2">
                    <Link className="flex items-center gap-2 p-4 hover:bg-gray-700 cursor-pointer"
                        to='/admin/pizzas'
                    >
                        <FaPizzaSlice />
                        {isOpen && <span>Manage Pizzas</span>}
                    </Link>
                    <Link className="flex items-center gap-2 p-4 hover:bg-gray-700 cursor-pointer"
                        to='/users'
                    >
                        <FaUsers />
                        {isOpen && <span>Users</span>}
                    </Link>
                    <Link className="flex items-center gap-2 p-4 hover:bg-gray-700 cursor-pointer"
                        to='/admin/orders'
                    >
                        <FaShoppingCart />
                        {isOpen && <span>Orders</span>}
                    </Link>
                    <Link className="flex items-center gap-2 p-4 hover:bg-gray-700 cursor-pointer"
                        to='/admin/analytics'
                    >
                        <SiGoogleanalytics />
                        {isOpen && <span>Analytics</span>}
                    </Link>
                    <Link className="flex items-center gap-2 p-4 hover:bg-gray-700 cursor-pointer"
                        to='/admin/analytics/table'
                    >
                        <RiDashboard2Fill />
                        {isOpen && <span>Dashboard</span>}
                    </Link>
                </ul>
            </div>
        )
}
export default SideBar;
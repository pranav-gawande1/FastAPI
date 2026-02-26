import { useState } from "react";
import { FaBars, FaHome, FaPizzaSlice, FaShoppingCart, FaUsers } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { RiDashboard2Fill, RiDashboardFill } from "react-icons/ri"
import { Link } from "react-router-dom";

const SideBar = ({ isHovered }) => {

    // const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            className={`h-screen bg-gray-100 text-gray-900 transition-all duration-300`}>
            {/* <div className="flex w-20 md:w-64 items-center justify-between p-4"> */}
                {/* {isOpen && <h2 className="text-lg font-bold">Pizza Admin</h2>} */}
                {/* <button onClick={() => setIsHovered(!isHovered)}>
                    <FaBars />
                </button> */}
            {/* </div> */}
            <ul className="mt-6 space-y-2">
                <Link className="flex items-center gap-2 p-4 hover:bg-gray-700 cursor-pointer"
                    to='/admin/pizzas'
                >
                    <FaPizzaSlice />
                    {isHovered && <span>Manage Pizzas</span>}
                </Link>
                <Link className="flex items-center gap-2 p-4 hover:bg-gray-700 cursor-pointer"
                    to='/users'
                >
                    <FaUsers />
                    {isHovered && <span>Users</span>}
                </Link>
                <Link className="flex items-center gap-2 p-4 hover:bg-gray-700 cursor-pointer"
                    to='/admin/orders'
                >
                    <FaShoppingCart />
                    {isHovered && <span>Orders</span>}
                </Link>
                <Link className="flex items-center gap-2 p-4 hover:bg-gray-700 cursor-pointer"
                    to='/admin/analytics'
                >
                    <SiGoogleanalytics />
                    {isHovered && <span>Analytics</span>}
                </Link>
                <Link className="flex items-center gap-2 p-4 hover:bg-gray-700 cursor-pointer"
                    to='/admin/analytics/table'
                >
                    <RiDashboard2Fill />
                    {isHovered && <span>Dashboard</span>}
                </Link>
            </ul>
        </div>
    )
}
export default SideBar;
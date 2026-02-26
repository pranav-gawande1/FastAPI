import { useState } from "react";

const SideBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex">
            <div className="w-20 md:w-64">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Pizza Paradise</h2>
                </div>

                <nav>
                    <ul>
                        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                            {/* <FaHome /> */}
                            <span>Home</span>
                        </li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default SideBar;
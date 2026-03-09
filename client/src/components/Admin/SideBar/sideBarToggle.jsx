import { FaChevronCircleLeft, FaChevronCircleRight, FaChevronLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updatesideBarStatus } from "../../../shared/slices/sharedslice";
import Tooltip from "../../ToolTip";

const SideBarToggle = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector((state) => state.sideBarStatus);

    const toggleSidebar = () => {
        dispatch(updatesideBarStatus({ isOpen: !isOpen }));
    };

    return (
        <div className="fixed top-20 left-4 z-50 group">
            <button onClick={toggleSidebar}>
                {isOpen ? (
                    <FaChevronCircleLeft className="text-xl cursor-pointer text-[#ff4d4d]" />
                ) : (
                    <FaChevronCircleRight className="text-xl cursor-pointer text-[#ff4d4d]" />
                )}
            </button>

            <Tooltip text={isOpen ? "Close Sidebar" : "Open Sidebar"} className="bg-black text-white text-sm font-semibold
        px-2 py-1 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 whitespace-nowrap z-50"/>
        </div>
    );
};

export default SideBarToggle;
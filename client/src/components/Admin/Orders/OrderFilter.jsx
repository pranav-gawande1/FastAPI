import { FaFilter, FaSearch } from "react-icons/fa";

const OrderFilter = ({ searchTerm, setSearchTerm, filterStatus, setFilterStatus }) => {


    return (
        <>
            <div className="flex flex-col sm:flex-row gap-3 p-2">
                <div className="flex-1 relative">
                    <FaSearch className="absolute left-3 top-3 text-gray-500" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by name, status, date...."
                        className="w-full pl-10 pr-4 py-2 bg-white
                        border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500
                        focus:outline-none transition-all"
                    />
                </div>
                <div className="flex items-center gap-2 bg-white
                border border-gray-300 rounded-lg px-3 py-1">
                    <FaFilter className="text-gray-500" />
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="bg-transparent text-sm text-gray-800 focus:outline-none">
                        <option value={"all"}>All</option>
                        <option value={"pending"}>Pending</option>
                        <option value={"confirmed"}>Confirmed</option>
                        <option value={"preparing"}>Preparing</option>
                        <option value={"ready"}>Ready</option>
                        <option value={"completed"}>Completed</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default OrderFilter;
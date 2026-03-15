import { FaChartBar, FaCheck, FaClock, FaTimes } from "react-icons/fa";
import useFetch from "../../../shared/hooks/useFetch";
import Loader from "../../Loader/Loader";
import ErrorState from "../../Loader/NotFound";

const OrderSummary = () => {
    const { data, error, loading } = useFetch(`/summary/ordersummary/`);
    if (loading) {
        return <Loader />
    }

    if (error) {
        return <ErrorState />
    }
    return (
        <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="p-6 bg-yellow-100 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="flex items-center gap-3 overflow-hidden">
                    <FaClock className="w-6 h-6 text-yellow-500" />
                    <h1 className="text-gray-900 font-semibold">Pending Orders:</h1></div>
                <h2 className="text-3xl font-bold text-yellow-600">{data?.orderData[0]?.value}</h2>
            </div>
            <div className="p-6 bg-green-100 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="flex items-center gap-3 overflow-hidden">
                    <FaCheck className="w-6 h-6 text-green-500" />
                    <h1 className="text-gray-900 font-semibold">Completed Orders: </h1>
                </div>
                <h2 className="text-3xl font-bold text-green-600">{data?.orderData[1]?.value}</h2>
            </div>
            <div className="p-6 bg-red-100 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="flex items-center gap-3 overflow-hidden">
                    <FaTimes className="w-6 h-6 text-red-500" />
                    <h1 className="text-gray-900 font-semibold">Cancelled Orders:</h1>
                </div>
                <h2 className="text-3xl font-bold text-red-600">{data?.orderData[2]?.value}</h2>
            </div>
            <div className="p-6 bg-blue-100 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="flex items-center gap-3 overflow-hidden">
                    <FaChartBar className="w-6 h-6 text-blue-500"/>
                <h1 className="text-gray-900 font-semibold">Total Orders: </h1>
                </div>
                <span className="text-3xl font-bold text-blue-600">{data?.orderData[3]?.value}</span>
            </div>
        </div>
    )
}

export default OrderSummary;
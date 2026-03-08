import useFetch from "../../../shared/hooks/useFetch";
import Loader from "../../Loader/Loader";
import ErrorState from "../../Loader/NotFound";

const DashBoardSummary = () => {
    const {data, loading, error} = useFetch(`/summary/dashboardsummary/`);
    if(loading){
        return(
            <Loader />
        )
    }
    if(error){
        return(
            <ErrorState />
        )
    }
    return (
        <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="flex items-center gap-3 overflow-hidden">
                    {/* <FaClock className="w-6 h-6 text-yellow-500" /> */}
                    <h1 className="text-gray-900 font-semibold">Total Orders</h1></div>
                <h2 className="text-3xl font-bold text-yellow-600">{data?.totalorders}</h2>
            </div>
            <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="flex items-center gap-3 overflow-hidden">
                    {/* <FaCheck className="w-6 h-6 text-green-500" /> */}
                    <h1 className="text-gray-900 font-semibold">Total Revenue </h1>
                </div>
                <h2 className="text-3xl font-bold text-green-600">₹ {data?.total_revenue}</h2>
            </div>
            <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="flex items-center gap-3 overflow-hidden">
                    {/* <FaTimes className="w-6 h-6 text-red-500" /> */}
                    <h1 className="text-gray-900 font-semibold">Total Customers</h1>
                </div>
                <h2 className="text-3xl font-bold text-red-600">{data?.totalusers}</h2>
            </div>
            <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="flex items-center gap-3 overflow-hidden">
                    {/* <FaChartBar className="w-6 h-6 text-blue-500" /> */}
                    <h1 className="text-gray-900 font-semibold">Total Pizzas sold </h1>
                </div>
                <span className="text-3xl font-bold text-blue-600">{data?.total_pizzasold}</span>
            </div>
        </div>
    )
}
export default DashBoardSummary;
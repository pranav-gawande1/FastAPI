import { Delete, Edit, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import OrderFilter from "./OrderFilter";
import OrderStatusModal from "./OrderStatusModal";
import useFetch from "../../../shared/hooks/useFetch";
import Loader from "../../Loader/Loader";
import { toast } from "react-toastify";
import useManualFetch from "../../../shared/hooks/useManualFetch";
import { FaSort } from "react-icons/fa";
import Tooltip from "../../ToolTip";

const OrderTable = () => {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [sort, setSort] = useState("total_price");
    const [order, setOrder] = useState("desc");

    const { data: orderData, error: orderError, loading: orderLoading } = useFetch(`/orders/orders?page=${page}&limit=${limit}&sort=${sort}&order=${order}`);
    useEffect(() => {
        if (orderError) {
            toast.error(orderError.message || "Failed to fetch orders");
        }
    }, [orderError, orderData, page, sort, order]);

    const { execute: cancelExecute } = useManualFetch();

    const handleCancelOrder = async (orderId) => {
        try {
            await cancelExecute(`/orders/admin/order/${orderId}/cancel`, "PATCH");
            toast.success("Order cancelled successfully");
        } catch (err) {
            toast.error(err.message || "Failed to cancel order");
        }
    };



    const OrderStatusColor = {
        cancelled_by_admin: "bg-gray-800 text-gray-100",
        cancelled_by_user: "bg-red-700 text-red-100",
        pending: "bg-yellow-700 text-yellow-100",
        confirmed: "bg-blue-700 text-blue-100",
        preparing: "bg-purple-700 text-purple-100",
        ready: "bg-green-700 text-green-100",
        completed: "bg-emerald-700 text-emerald-100"
    }

    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

    const filteredOrders = orderData?.GetAllOrders?.filter((order) => {

        const matchesSearch =
            order?.user?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order?.items?.some((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

        const matchesStaus =
            filterStatus === "all" || order.status === filterStatus;

        return matchesSearch && matchesStaus;
    });

    const [actionType, setActionType] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleEdit = (order) => {
        setSelectedOrder(order);
        setActionType("edit");
    };

    const handleView = (order) => {
        setSelectedOrder(order);
        setActionType("view");
    }

    if (orderLoading) {
        return (
            <Loader />
        )
    }
    return (
        <>
            <div className="w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden">

                <OrderFilter searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus} />
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider"> order ID</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider"> Items</th>
                                <th className="px-6 py-4 text-left tracking-wider"
                                    onClick={() => {
                                        setSort("total_price");
                                        setOrder(order === "asc" ? "desc" : "asc");
                                    }}
                                >
                                    <div className="group flex items-center gap-2">
                                        <FaSort />
                                        <span className="text-xs
                            font-semibold text-gray-900 uppercase">Total</span>
                                        <Tooltip text={order === "asc" ? "High price first" : "Low price first"} className="relative bottom-[130%] left-1/2 -translate-x-1/2
        bg-black text-white text-sm font-semibold
        px-2 py-1 rounded
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible
        transition-all duration-200
        whitespace-nowrap
        z-50" />
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Payment</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left tracking-wider" onClick={() => {
                                    setSort("createdAt");
                                    setOrder(order === "asc" ? "desc" : "asc");
                                }}>
                                    <div className="flex items-center gap-2 group">
                                        <FaSort />
                                        <span className="text-xs
                            font-semibold text-gray-900 uppercase">Date</span>
                                        <Tooltip text={order === "asc" ? "Newest order first" : "Oldest order first"} className="bg-black text-white text-sm font-semibold
        px-2 py-1 rounded
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible
        transition-all duration-200
        whitespace-nowrap
        z-50" />
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody >
                            {filteredOrders?.length > 0 ? (filteredOrders?.map((order) => (
                                <tr key={order._id} className="bg-white hover:bg-gray-100">
                                    <td className="px-6 py-4 ">
                                        {`ORD${order._id.slice(-6).toUpperCase()}`}
                                    </td>
                                    <td className="px-6 py-4">
                                        {order?.user?.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-2">
                                            {order?.items?.map((item) => (
                                                <span className=" flex items-center gap-3" key={item._id}>{item?.pizza?.name}
                                                    <span>{item?.quantity}</span>
                                                    <span>{item?.size}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        ₹{order?.total_price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-200 px-3 py-1 rounded-full uppercase text-xs font-medium">
                                            {/* {order.paymentMethod} */}
                                            online
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs 
                                        font-medium uppercase ${OrderStatusColor[order?.order_status]}`}>
                                            {order?.order_status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* {order?.createdAt} */}
                                        {new Date(order?.createdAt).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-4">
                                            <button onClick={() => handleView(order)}
                                                className="relative group focus:outline-none text-gray-900 hover:text-[#ff4d4d] focus:outline-none">
                                                <Eye className="w-4 h-4" />
                                                <Tooltip text={"View Order"} className={`absolute bottom-[130%] right-1/2 -translate-x-1/2
                                                    bg-black text-white text-sm
                                                    px-2 py-1 rounded
                                                    opacity-0 invisible
                                                    group-hover:opacity-100 group-hover:visible
                                                    transition-all duration-200
                                                    whitespace-nowrap
                                                    z-50`} />
                                            </button>
                                            <button onClick={() => handleEdit(order)}
                                                className="relative group focus:outline-none text-gray-900 hover:text-[#ff4d4d] focus:outline-none">
                                                <Edit className="w-4 h-4" />
                                                <Tooltip text={"Update Order"} className={`absolute bottom-[130%] right-1/2 -translate-x-1/2
                                                    bg-black text-white text-sm
                                                    px-2 py-1 rounded
                                                    opacity-0 invisible
                                                    group-hover:opacity-100 group-hover:visible
                                                    transition-all duration-200
                                                    whitespace-nowrap
                                                    z-50`} />
                                            </button>
                                            <button
                                                // onClick={() => handleEdit(order)}
                                                onClick={() => handleCancelOrder(order?._id)}
                                                className=" relative group focus:outline-none text-gray-900 hover:text-[#ff4d4d] focus:outline-none">
                                                <Delete className="w-4 h-4" />
                                                <Tooltip text={"Cancel Order"} className={`absolute bottom-[130%] right-1/2 -translate-x-1/2
                                                    bg-black text-white text-sm
                                                    px-2 py-1 rounded
                                                    opacity-0 invisible
                                                    group-hover:opacity-100 group-hover:visible
                                                    transition-all duration-200
                                                    whitespace-nowrap
                                                    z-50`} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))) :
                                (
                                    <tr>
                                        <td>
                                            <p>No Pizzas Found</p>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <OrderStatusModal
                        order={selectedOrder}
                        isOpen={!!selectedOrder}
                        actionType={actionType}
                        // onStatusChange={handleStatus}
                        onClose={() => setSelectedOrder(null)}
                    />
                </div>

                <div className="px-6 py-4 bg-gray-200
                text-sm test-gray-900 flex items-center justify-between">
                    <p>Showing {orderData?.GetAllOrders?.length} of {orderData?.GetAllOrders?.length} orders</p>
                    <p>Page {orderData?.page} of {orderData?.totalPages}</p>
                    <div className="flex gap-4">
                        <button onClick={() => setPage(page - 1)} disabled={page === 1}>← Previous</button>
                        <button onClick={() => setPage(page + 1)}>Next →</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default OrderTable;
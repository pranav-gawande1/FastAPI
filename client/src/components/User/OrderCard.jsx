import { Edit, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import OrderUpdateModal from "./OrderUpdateModal";
import useFetch from "../../shared/hooks/useFetch";
import useManualFetch from "../../shared/hooks/useManualFetch"
import ErrorState from "../Loader/NotFound";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

const OrderCard = () => {
    const [menuOpenId, setMenuOpenId] = useState(false);

    const [selectedOrder, setSelectedOrder] = useState(null);

    const { data, error, loading } = useFetch(`/orders/myorders`);
    const { data: cancelData, error: cancelError, loading: cancelLoading, status: cancelStatus, execute: cancelExecute } = useManualFetch();

    const handleCancelOrder = async (orderId) => {
        try {
            await cancelExecute(`/orders/order/${orderId}/cancel`, "PATCH");
            toast.success("Order cancelled successfully");
        } catch (err) {
            toast.error(err.message || "Failed to cancel order");
        }
    };

    useEffect(() => {
        if (error) {
            toast.error(error.message || "Failed to fetch orders");
        }
    }, [error]);

    if (loading) return <Loader />;
    if (error) return <ErrorState />;

    const handleView = (order) => {
        setSelectedOrder(order);
    }

    const statusColors = {
        pending: "bg-yellow-700 text-yellow-100",
        confirmed: "bg-blue-700 text-blue-100",
        preparing: "bg-purple-700 text-purple-100",
        ready: "bg-green-700 text-green-100",
        completed: "bg-emerald-700 text-emerald-100"
    }
    return (
        <>
            {data?.AllOrderoFUser?.length > 0 ? (
                data?.AllOrderoFUser?.map((order) => (
                    <div key={order._id} className="rounded-lg p-4 bg-white hover:bg-gray-200 transition-colors shadow-xl">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            {/* Left Section - Order Info */}
                            <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-3">
                                    <h3 className="font-semibold text-lg">{`ORD${order._id.slice(-6).toUpperCase()}`}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusColors[order?.order_status]}`}>
                                        {order.order_status}
                                    </span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    <p>{order?.items?.map((item) => `${item.quantity}x ${item?.pizza?.name}`).join(", ")}</p>
                                    <p className="mt-1">
                                        Ordered on {new Date(order?.createdAt).toLocaleDateString()} at{" "}
                                        {new Date(order?.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                    </p>
                                </div>
                            </div>

                            {/* Right Section - Price and Action */}
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">Total</p>
                                    <p className="text-xl font-bold text-primary">₹{order?.total_price.toFixed(2)}</p>
                                </div>
                                {/* <button onClick={() => handleView(order)}
                                    className="focus:outline-none"
                                >
                                    <Eye className="w-4 h-4 mr-2" />
                                    <span
                                        className="
                                                    relative bottom-[130%] left-1/2 -translate-x-1/2
                                                    bg-black text-white text-sm
                                                    px-2 py-1 rounded
                                                    opacity-0 invisible
                                                    group-hover:opacity-100 group-hover:visible
                                                    transition-all duration-200
                                                    whitespace-nowrap
                                                    z-50
                                                "
                                    >
                                        View Order
                                    </span>
                                </button> */}
                                <div className="flex flex-col items-center space-y-4">
                                    <button
                                        onClick={() => handleView(order)}
                                        className="relative group focus:outline-none"
                                    >
                                        <Eye className="w-4 h-4" />

                                        <span
                                            className="
                                                    absolute bottom-[130%] right-1/2 -translate-x-1/2
                                                    bg-black text-white text-sm
                                                    px-2 py-1 rounded
                                                    opacity-0 invisible
                                                    group-hover:opacity-100 group-hover:visible
                                                    transition-all duration-200
                                                    whitespace-nowrap
                                                    z-50
                                                "
                                        >
                                            View Order
                                        </span>
                                    </button>
                                    <div className="relative ">
                                        <button
                                            onClick={() =>
                                                setMenuOpenId(menuOpenId === order._id ? null : order._id)
                                            }
                                            className="relative group focus:outline-none">
                                            <Edit className="w-4 h-4" />
                                            <span
                                                className="
                                                    absolute bottom-[130%] right-1/2 -translate-x-1/2
                                                    bg-black text-white text-sm
                                                    px-2 py-1 rounded
                                                    opacity-0 invisible
                                                    group-hover:opacity-100 group-hover:visible
                                                    transition-all duration-200
                                                    whitespace-nowrap
                                                    z-50
                                                "
                                            >
                                                Edit Order
                                            </span>
                                        </button>
                                        {menuOpenId === order._id && (
                                            <div className="absolute right-0 mt-2 w-48
                                            bg-gray-800 rounded-lg  shadow-xl z-10">
                                                <button onClick={() => handleCancelOrder(order._id)
                                                }
                                                    className="block text-gray-200
                                            w-full text-left px-4 py-2 text-sm hover:bg-gray-700
                                            hover:rounded-lg transitions-colors
                                            ">Cancel Order</button>
                                                <button onClick={() => onView(user)
                                                }
                                                    className="block text-gray-200
                                            w-full text-left px-4 py-2 text-sm hover:bg-gray-700
                                            transitions-colors
                                            ">Update Order</button>
                                                {/* <button onClick={() => onDelete(user._id)
                                                }
                                                    className="block text-red-400
                                            w-full text-left px-4 py-2 text-sm hover:bg-gray-700
                                            hover:rounded-lg transitions-colors
                                            ">Delete Order</button> */}
                                            </div>
                                        )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) :
                (<div className="rounded-lg p-4 transition-colors shadow-xl items-center">
                    <div className="px-6 py-8 text-center text-gray-400">
                        <div className="mb-4 text-5xl">⚠️</div>
                        <p className="text-black text-lg">No orders for your account</p>
                    </div>
                </div>)
            }
            < OrderUpdateModal
                order={selectedOrder}
                isOpen={!!selectedOrder}
                onClose={() => setSelectedOrder(null)}
            />
        </>
    );
};
export default OrderCard;
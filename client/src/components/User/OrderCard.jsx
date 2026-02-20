import { Eye } from "lucide-react";
import { useState } from "react";
import OrderUpdateModal from "./OrderUpdateModal";

const OrderCard = ({ order }) => {

    const [selectedOrder, setSelectedOrder] = useState(null);

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
            <div className="rounded-lg p-4 bg-white hover:bg-gray-200 transition-colors shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left Section - Order Info */}
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                            <h3 className="font-semibold text-lg">{order.id}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusColors[order.status]}`}>
                                {order.status}
                            </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            <p>{order.items.map((item) => `${item.quantity}x ${item.name}`).join(", ")}</p>
                            <p className="mt-1">
                                Ordered on {new Date(order.orderDate).toLocaleDateString()} at{" "}
                                {new Date(order.orderDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Price and Action */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="text-right">
                            <p className="text-xs text-muted-foreground">Total</p>
                            <p className="text-xl font-bold text-primary">${order.totalPrice.toFixed(2)}</p>
                        </div>
                        <button onClick={() => handleView(order)}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                        </button>
                    </div>
                </div>
                <OrderUpdateModal
                    order={selectedOrder}
                    isOpen={!!selectedOrder}
                    onClose={() => setSelectedOrder(null)}
                />
            </div>
        </>
    );
};
export default OrderCard;
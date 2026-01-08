import { Eye } from "lucide-react";
import { useState } from "react";
import OrderFilter from "./OrderFilter";
import OrderStatusModal from "./OrderStatusModal";

const OrderTable = ({ orders }) => {
    const OrderStatusColor = {
        pending: "bg-yellow-700 text-yellow-100",
        confirmed: "bg-blue-700 text-blue-100",
        preparing: "bg-purple-700 text-purple-100",
        ready: "bg-green-700 text-green-100",
        completed: "bg-emerald-700 text-emerald-100"
    }

    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

    const filteredOrders = orders.filter((order) => {

        const matchesSearch =
            order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.items.some((item) =>
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

    // const handleDelete = (user) => {
    //     setSelectedUser(user);
    //     setActionType("delete");
    // }
    return (
        <>
            <div className="w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden">

                <OrderFilter searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus} />
                <div>
                    <table className="w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider"> order ID</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider"> Items</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Total</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Payment</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody >
                            {filteredOrders.length > 0 ? (filteredOrders.map((order) => (
                                <tr key={order.id} className="bg-white hover:bg-gray-100">
                                    <td className="px-6 py-4 ">
                                        {order.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {order.customerName}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-2">
                                            {order.items.map((item, idx) => (
                                                <span key={idx}>{item.name}
                                                    <span>{item.quantity}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {order.totalPrice}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-200 px-3 py-1 rounded-full uppercase text-xs font-medium">
                                            {order.paymentMethod}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs 
                                        font-medium uppercase ${OrderStatusColor[order.status]}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {order.orderDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-3">
                                            <button onClick={() => handleView(order)}
                                            className="text-gray-900 hover:text-[#ff4d4d]">
                                                <Eye />
                                            </button>
                                            <button onClick={() => handleEdit(order)}
                                            className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-[#ff4d4d]">
                                                Update
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
                    <p>Showing {filteredOrders.length} of {orders.length} orders</p>
                    <div className="flex gap-4">
                        <button>← Previous</button>
                        <button>Next →</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default OrderTable;
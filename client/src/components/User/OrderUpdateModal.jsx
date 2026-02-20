import Modal from "../Modal/Modal.jsx";

const OrderUpdateModal = ({ order, isOpen, onClose }) => {
    const OrderStatusColor = {
        pending: "bg-yellow-700 text-yellow-100",
        confirmed: "bg-blue-700 text-blue-100",
        preparing: "bg-purple-700 text-purple-100",
        ready: "bg-green-700 text-green-100",
        completed: "bg-emerald-700 text-emerald-100"
    }
    if (!isOpen || !order) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Order Details">
            <div className="space-y-4">
                <div className="">
                    <p className="text-gray-900 font-semibold">Items: </p>
                    {order.items.map((item) => (
                        <div key={item.id} item={item} className="flex justify-between">
                            <div>
                                <p>{item.name}</p>
                                <p>{item.quantity}×</p>
                            </div>
                            <p>₹{item.price}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row items-center justify-between gap-3">
                    <p className="text-gray-900 font-semibold">Current Status:</p>
                    <p className={`px-2 rounded-lg uppercase ${OrderStatusColor[order.status]}`}>{order.status}</p>
                </div>
                <div className="flex flex-row items-center justify-between gap-3">
                    <p className="text-gray-900 font-semibold">Payment Method:</p>
                    <p className="bg-gray-200 px-2 rounded-lg uppercase">{order.paymentMethod}</p>
                </div>
                <div className="flex flex-row items-center justify-between gap-3">
                    <p className="text-gray-900 font-semibold">Total Amount:</p>
                    <p className="bg-gray-200 px-2 rounded-lg uppercase">₹ {order.totalPrice}</p>
                </div>
            </div >
        </Modal>
    );
};

export default OrderUpdateModal;
import Modal from "../../Modal/Modal.jsx";

const statusTransitions = {
    pending: ["confirmed"],
    confirmed: ["preparing"],
    preparing: ["ready"],
    ready: ["completed"],
    completed: [],
}

const OrderStatusModal = ({ order, isOpen, onClose, actionType, onStatusChange }) => {
    if (!isOpen || !order) return null;

    const availableTransitions = statusTransitions[order.status] || [];

    if (actionType === "edit") {
        return (
            
            <>
                <Modal isOpen={isOpen} onClose={onClose} title="Update Order Status">
                    <div className="space-y-4">
                        {/* */}
                        <div className="flex flex-row items-center justify-between gap-3">
                            <p className="text-gray-900 font-semibold">Orders ID:</p>
                            <p className="bg-gray-400 px-2 rounded-lg hover:bg-[#ff4d4d]">{`ORD${order._id.slice(-6).toUpperCase()}`}</p>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-3">
                            <p className="text-gray-900 font-semibold">Current Status:</p>
                            <p className="bg-gray-400 px-2 rounded-lg hover:bg-[#ff4d4d] uppercase">{order?.order_status}</p>
                        </div>

                        {availableTransitions.length > 0 ? (
                            <div className="flex items-center justify-between">
                                <p>Update to:</p>
                                <div>
                                    {availableTransitions.map((status) => (
                                        <button
                                            key={status}
                                            className="w-full px-3 py-1 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium uppercase"
                                            onClick={() => {
                                                onStatusChange(status)
                                            }}
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )
                            :
                            (<div>
                                <p>This Order is already completed.</p>
                            </div>)}
                    </div>
                </Modal>
            </>
        );
    } else if (actionType === "view") {
        return (
            <Modal isOpen={isOpen} onClose={onClose} title="Order Details">
                <div className="space-y-4">                    <div className="flex flex-row items-center justify-between gap-3">
                    <p className="text-gray-900 font-semibold">Orders ID:</p>
                    <p className="bg-gray-400 px-2 rounded-lg hover:bg-[#ff4d4d]">{`ORD${order._id.slice(-6).toUpperCase()}`}</p>
                </div>
                    <div className="flex flex-row items-center justify-between gap-3">
                        <p className="text-gray-900 font-semibold">Current Status:</p>
                        <p className="bg-gray-400 px-2 rounded-lg hover:bg-[#ff4d4d] uppercase">{order?.order_status}</p>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-3">
                        <p className="text-gray-900 font-semibold">Payment Method:</p>
                        <p className="bg-gray-400 px-2 rounded-lg hover:bg-[#ff4d4d] uppercase">online</p>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-3">
                        <p className="text-gray-900 font-semibold">Total Amount:</p>
                        <p className="bg-gray-400 px-2 rounded-lg hover:bg-[#ff4d4d] uppercase">₹{order?.total_price}</p>
                    </div>
                </div >
            </Modal>
        );
    }
};

export default OrderStatusModal;
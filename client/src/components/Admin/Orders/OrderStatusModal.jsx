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
                    <div>
                        <div className="flex flex-col gap-3">
                            <p>Orders ID:</p>
                            <p>{order.id}</p>
                        </div>
                        <div>
                            <p>Current Status:</p>
                            <p>{order.status}</p>
                        </div>

                        {availableTransitions.length > 0 ? (
                            <div>
                                <p>Update to:</p>
                                <div>
                                    {availableTransitions.map((status) => (
                                        <button
                                            key={status}
                                            className="w-full px-4 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
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
            <Modal isOpen={isOpen} onClose={onClose} title="User">
                <div className="bg-white p-6 shadow-md w-full max-w-md mx-auto">
                    <h1>Hello debugginh on top</h1>
                </div >
            </Modal>
        );
    }
};

export default OrderStatusModal;
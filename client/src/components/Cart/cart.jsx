import { useState } from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";

const Cart = ({ items, isOpen, onClose, onRemove, onUpdateQuantity }) => {

    const [isClosing, setIsClosing] = useState(false);
    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            onClose()
            setIsClosing(false)
        }, 300)
    }

    const total = items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    const tax = (total * 0.1).toFixed(2);
    const subtotal = (total - tax).toFixed(2);

    return (
        <>
            {isOpen && (
                <div
                    className={`fixed inset-0 transition-opacity
                duration-300 ${isClosing ? "opacity-0" : "opacity-100"
                        }`}
                    onClick={handleClose}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 flex flex-col transition-transform duration-300 transform ${isOpen && !isClosing ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                {/* Header */}
                <div
                    className="bg-gray-200 text-gray-900 flex justify-between items-center p-4"
                >
                    <h2 className="text-2xl font-bold">Your Cart</h2>
                    <button
                        onClick={handleClose}
                        aria-label="Close Cart"
                        className="p-1 hover:bg-gray-400 rounded-md transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {items.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-5xl mb-4">🛒</div>
                            <p className="text-gray-900 font-medium">Your Cart is Empty!</p>
                            <p className="text-sm text-gray-900 mt-2">Add some delicious pizza into it!</p>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item._id} className="bg-gray-100 p-4 flex gap-4">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                                    <p className="text-sm text-gary-600">{item.price} each</p>

                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            className="p-1 hover:bg-border rounded
                                        transition-colors"
                                            onClick={() => onUpdateQuantity(item._id, item.quantity - 1)}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className="p-1 hover:bg-border rounded
                                        transition-colors"
                                            onClick={() => onUpdateQuantity(item._id, item.quantity + 1)}
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="text-right flex flex-col justify-between">
                                    <p className="font-bold text-gray-900">{item.price}</p>
                                    <button
                                        className="p-1 hover:bg-gray-300
                                    rounded transition-colors text-gray-900"
                                        aria-label="Remove item"
                                        onClick={() => onRemove(item._id)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                    {items.length > 0 && (
                        <div className="border-t border-border p-6 space-y-4">
                            <div className="space-y2">
                                <div className="flex justify-between
                                    text-gray-900">
                                    <span>Subtotal:</span>
                                    <span>₹{subtotal}</span>
                                </div>
                                <div className="flex justify-between
                                    text-gray-900">
                                    <span>Tax(10%):</span>
                                    <span>₹{tax}</span>
                                </div>
                                <div className="flex justify-between
                                    text-gray-900">
                                    <span className="text-[#ff4d4d] font-bold font-2xl">Total:</span>
                                    <span>₹{total}</span>
                                </div>
                            </div>

                            <button className="w-full bg-[#ff4d4d] text-white
                            hover:bg-red-600 font-bold py-3 rounded-lg transition-all
                            duration-200 active:scale-95">
                                Proceed to Checkout
                            </button>
                        </div>

                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
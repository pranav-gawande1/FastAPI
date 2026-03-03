import { useEffect, useState } from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen, toggleCart, clearCart, selectCartItems, setCart, } from "../../features/Cart/cartSlice";
import useManualFetch from "../../shared/hooks/useManualFetch";
import { toast } from "react-toastify";

const Cart = () => {
    const { data: manualData, loading: manualLoading, error: manualError, status: manualStatus, execute: clearExecute } = useManualFetch();
    const { data: updateData, loading: updateLoading, error: updateError, status: updateStatus, execute: updateExecute } = useManualFetch();
    const { data: deleteData, loading: deleteLoading, error: deleteError, status: deleteStatus, execute: deleteExecute } = useManualFetch();

    const [isClosing, setIsClosing] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartItems = useSelector(selectCartItems);

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            dispatch(toggleCart(false))
            setIsClosing(false)
        }, 300)
    }

    const handleClear = async () => {
        await clearExecute('/carts/cart', "PATCH");
    };

    const handleUpdate = async (itemId, newQuantity) => {
        await updateExecute(`/carts/updatecart/${itemId}`, 'PATCH',
            { quantity: newQuantity }
        )
    };

    const handleRemove = async (itemId) => {
        await deleteExecute(`/carts/cart/${itemId}`, 'PATCH',)
    }
    useEffect(() => {
        if (manualStatus === 'success' && manualData) {
            setIsClosing(true)
            setTimeout(() => {
                dispatch(clearCart());
                setIsClosing(false)
                toast.success(manualData.message);
            }, 300);
        }

        if ((updateStatus === 'success' && updateData) || (deleteStatus === 'success' && deleteData)) {
            setIsClosing(true)
            setTimeout(() => {
                if (updateData) {
                    dispatch(setCart(updateData?.updateCartItem));
                    setIsClosing(false)
                    toast.success(updateData.message);
                } else {
                    dispatch(setCart(deleteData?.deletedItem));
                    setIsClosing(false)
                    toast.success(deleteData.message);
                }
            }, 300);
        }
    }, [manualStatus, updateStatus, deleteStatus]);

    const total = cartItems.reduce((sum, item) => {
        return sum + item.pizza.price * item.quantity;
    }, 0);

    const tax = (total * 0.1).toFixed(2);
    const subtotal = (total - tax).toFixed(2);

    const onConfirm = () => {
        navigate('/confirm-order');
    };
    return (
        <>
            {/* {!cartItems && <Loader />} */}
            {isCartOpen && (
                <div
                    className={`fixed inset-0 transition-opacity
                duration-300 ${isClosing ? "opacity-0" : "opacity-100"
                        }`}
                    onClick={handleClose}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 flex flex-col transition-transform duration-300 transform ${isCartOpen && !isClosing ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
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
                    {cartItems.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-5xl mb-4">🛒</div>
                            <p className="text-gray-900 font-medium">Your Cart is Empty!</p>
                            <p className="text-sm text-gray-900 mt-2">Add some delicious pizza into it!</p>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item._id} className="bg-gray-100 p-4 flex gap-4">
                                <img
                                    src={item.pizza.imageUrl}
                                    alt={item.pizza.name}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900">{item.pizza.name}</h3>
                                    <p className="text-sm text-gray-600">{item.pizza.price} each</p>

                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            className="p-1 hover:bg-gray-300 rounded
                                        transition-colors"
                                            onClick={() => {
                                                if (item.quantity > 1) {
                                                    handleUpdate(item._id, item.quantity - 1)
                                                }
                                            }
                                            }

                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className="p-1 hover:bg-border rounded
                                        transition-colors"
                                            onClick={() => {
                                                if (item.quantity > 1) {
                                                    handleUpdate(item._id, item.quantity + 1)
                                                }
                                            }
                                            }
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="text-right flex flex-col justify-between">
                                    <p className="font-bold text-gray-900">{item?.pizza.price}</p>
                                    <button
                                        className="p-1 hover:bg-gray-300
                                    rounded transition-colors text-gray-900"
                                        aria-label="Remove item"
                                        onClick={() =>
                                            // dispatch(removeFromCart(item._id))
                                            handleRemove(item._id)
                                        }
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                    {cartItems.length > 0 && (
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
                            duration-200 active:scale-95"
                                onClick={() => navigate('/cart')}
                            >
                                Go to Cart
                            </button>

                            <button className="w-full bg-[#ff4d4d] text-white
                            hover:bg-red-600 font-bold py-3 rounded-lg transition-all
                            duration-200 active:scale-95"
                                onClick={onConfirm}
                            >
                                Proceed to Checkout
                            </button>

                            <button className="w-full bg-[#ff4d4d] text-white
                            hover:bg-red-600 font-bold py-3 rounded-lg transition-all
                            duration-200 active:scale-95"
                                onClick={() => handleClear()}
                            >
                                Clear Cart
                            </button>
                        </div>

                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
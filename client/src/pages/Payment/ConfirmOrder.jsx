import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import OrderSummary from "../../components/Payment/OrderSummary";
import PriceBreakDown from "../../components/Payment/PriceBreakDown";
import AddressInfo from "../../components/Profile/AddressInfo";
import useManualFetch from "../../shared/hooks/useManualFetch";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartItems } from "../../features/Cart/cartSlice";
import { toast } from "react-toastify";


const ConfirmOrder = () => {

    const { execute: clearExecute } = useManualFetch();
    const { execute: placeExecute, loading: placeLoading } = useManualFetch();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems);

    // const handlePlaceOrder = async (orderItems) => {
    //     if (cartItems.length === 0) {
    //         toast.error("Cart is empty!");
    //         return;
    //     }

    //     const formattedItems = orderItems.map(item => ({
    //         pizzaId: item.pizza._id,
    //         quantity: item.quantity,
    //         size: item.size
    //     }));

    //     await execute(`/orders/orders`, 'POST',
    //         { items: formattedItems }
    //     )
    // }

    // const handleClear = async () => {
    //     try {
    //         const res = await clearExecute('/carts/cart', "PATCH");

    //         if (res?.success) {
    //             dispatch(clearCart());
    //             toast.success(res.message);
    //         }
    //     } catch (err) {
    //         toast.error("Failed to clear cart");
    //     }
    // };


    // useEffect(() => {
    //     if (status === "success" && data) {
    //         setTimeout(() => {
    //             toast.success(data.message);
    //         }, 300)
    //         handleClear();
    //         navigate("/place-order");

    //     }
    // }, [status, data, navigate])

    const handlePlaceOrder = async (orderItems) => {
        if (cartItems.length === 0) {
            toast.error("Cart is empty!");
            return;
        }

        try {
            const formattedItems = orderItems.map(item => ({
                pizzaId: item.pizza._id,
                quantity: item.quantity,
                size: item.size
            }));

            const res = await placeExecute(`/orders/orders`, 'POST', {
                items: formattedItems
            });

            if (res?.success) {
                // Clear cart in DB
                await clearExecute('/carts/cart', "PATCH");

                // Clear Redux
                dispatch(clearCart());

                toast.success(res.message);

                navigate("/place-order");
            }

        } catch (err) {
            toast.error("Order failed");
        }
    };
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div className="min-h-screen bg-white">
                    <header className="border-b border-gray-200 bg-gray-100">
                        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-2xl font-bold text-gray-900">Order Review</h1>
                            <p className="mt-1 text-sm text-gray-700">Step 1 of 3: Review your order details</p>
                        </div>
                    </header>
                    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                        <div className="grid gap-8 lg:grid-cols-3">
                            <div className="lg:col-span-2 space-y-8">
                                {/* <h1>Order & Address</h1> */}
                                <OrderSummary />
                                <AddressInfo className="rounded-lg border border-gray-200 bg-gray-100 p-6"
                                    titlestyle="mb-6 text-lg font-semibold text-gray-900"
                                    textcolor="text-gray-900"
                                    structure="flex items-center justify-between"
                                    datacolor="text-gray-700" />
                            </div>
                            <div className="space-y-6">
                                {/* <h1>Price summary</h1> */}
                                <PriceBreakDown />
                                <button
                                    onClick={() => handlePlaceOrder(cartItems)}
                                    disabled={placeLoading}
                                    className="w-full rounded-lg bg-[#ff4d4d] text-white
                                            px-6 py-3 font-semibold transistion-opacity 
                                            hover:opacity-90 disabled:opacity-50"
                                >
                                    {placeLoading ? "Processing..." : "Proceed to Payment"}
                                </button>

                                <Link
                                    to={"/home"}
                                    className="block w-full rounded-lg bg-[#ff4d4d] text-white
                                            text-center px-6 py-3 font-semibold transistion-opacity 
                                            hover:opacity-90 disabled:opacity-50"
                                >
                                    Back to Cart
                                </Link>
                            </div>
                        </div>

                    </main>
                </div>
                <div>

                </div>
                {/* <div><Footer /></div> */}
            </main>
        </>
    );
};

export default ConfirmOrder;
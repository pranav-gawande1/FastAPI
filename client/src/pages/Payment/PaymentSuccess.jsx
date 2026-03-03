import { Link } from "react-router-dom";
import OrderSummary from "../../components/Payment/OrderSummary";
import PriceBreakDown from "../../components/Payment/PriceBreakDown";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import useFetch from "../../shared/hooks/useFetch";
import useManualFetch from "../../shared/hooks/useManualFetch";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/Cart/cartSlice";

const PaymentSuccess = () => {
    const { id } = useParams();
    // console.log("ID", id);

    const { data } = useFetch(`/orders/order/${id}`, 'GET');
    const { execute: clearExecute } = useManualFetch();
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            // Clear cart in DB
            clearExecute('/carts/cart', "PATCH");

            // Clear Redux
            dispatch(clearCart());
        }
    }, [data, dispatch]);

    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div className="min-h-screen bg-background">
                    {/* Header */}
                    <header className="border-b border-gray-200 bg-bg-gray-100">
                        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-2xl font-bold text-gray-900">Payment Complete</h1>
                            <p className="mt-1 text-sm text-gray-700">
                                Step 3 of 3: Order confirmed
                            </p>
                        </div>
                    </header>

                    {/* Main Content */}
                    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                        <div className="grid gap-8 lg:grid-cols-3">
                            {/* Left Column - Success Message */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Success Card */}
                                <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8 text-center">
                                    <div className="mb-6 flex justify-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
                                            <svg
                                                className="h-8 w-8 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-bold text-green-900">
                                        Payment Successful!
                                    </h2>
                                    <p className="mt-3 text-lg text-green-800">
                                        Your order has been confirmed and is being prepared.
                                    </p>

                                    <div className="mt-8 space-y-4">
                                        <div className="rounded-md bg-white bg-opacity-60 p-4">
                                            <p className="text-sm text-gray-600">Order Number</p>
                                            <p className="mt-1 font-mono text-lg font-semibold text-gray-900">
                                                {`ORD-${id?.slice(-6).toUpperCase()}`}
                                            </p>
                                        </div>

                                        <div className="rounded-md bg-white bg-opacity-60 p-4">
                                            <p className="text-sm text-gray-600">Estimated Delivery</p>
                                            <p className="mt-1 text-lg font-semibold text-gray-900">
                                                2-3 Business Days
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Next Steps */}
                                <div className="rounded-lg border border-gray-200 bg-gray-100 p-8">
                                    <h3 className="mb-6 text-xl font-semibold text-gray-900">
                                        What Happens Next
                                    </h3>

                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-text-gray-900">
                                                1
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    Confirmation Email
                                                </p>
                                                <p className="mt-1 text-sm text-gray-700">
                                                    We'll send you a confirmation email with tracking details
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-gray-900">
                                                2
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Order Preparation</p>
                                                <p className="mt-1 text-sm text-gray-900">
                                                    Our team will prepare your items for shipment
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-gray-900">
                                                3
                                            </div>
                                            <div>
                                                <p className="font-medium text-text-gray-900">Shipment</p>
                                                <p className="mt-1 text-sm text-gray-700">
                                                    Your package will be shipped with tracking information
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Order Summary */}
                            <div className="space-y-6">
                                <OrderSummary cartItems={data?.getOrder?.items} />
                                <PriceBreakDown cartItems={data?.getOrder?.items} />

                                <div className="space-y-3">
                                    <Link
                                        to={"/home"}
                                        className="block w-full rounded-lg bg-[#ff4d4d] text-white
                                            text-center px-6 py-3 font-semibold transistion-opacity 
                                            hover:opacity-90 disabled:opacity-50"
                                    >
                                        Continue Shopping
                                    </Link>

                                    <Link
                                        to={"/orders"}
                                        className="block w-full rounded-lg bg-[#ff4d4d] text-white
                                            text-center px-6 py-3 font-semibold transistion-opacity 
                                            hover:opacity-90 disabled:opacity-50"
                                    >
                                        View All Orders
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </main>
        </>
    );
}

export default PaymentSuccess;
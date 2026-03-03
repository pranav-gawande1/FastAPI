import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
// import { selectCartItems } from "../../features/Cart/cartSlice";

const PriceBreakDown = ({ cartItems }) => {

    // const cartItems = useSelector(selectCartItems);
    // console.log("Cart", cartItems);

    const total = cartItems?.reduce((sum, item) => {
        return sum + item?.pizza?.price * item?.quantity;
    }, 0);

    const tax = (total * 0.1).toFixed(2);
    const subtotal = (total - tax).toFixed(2);
    if (!cartItems) return (
        <div className="rounded-lg border border-gray-200 bg-gray-100 p-6">
            <Loader />
        </div>
    )
    return (
        <div className="rounded-lg border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
                Price BreakDown
            </h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Subtotal</p>
                    <p className="text-sm text-gray-700">₹{subtotal}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Delivery Charges</p>
                    <p className="text-sm text-gray-700">0</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Tax</p>
                    <p className="text-sm text-gray-700">₹{tax}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Discount</p>
                    <p className="text-sm text-gray-700">0</p>
                </div>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-sm text-gray-700">₹{total}</p>
                </div>
            </div>
        </div>
    );
};
export default PriceBreakDown;
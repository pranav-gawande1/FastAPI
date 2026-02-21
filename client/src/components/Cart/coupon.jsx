import Loader from "../Loader/Loader";

const Coupon = ({ coupon }) => {
    if (!coupon)
        return (
            <Loader />
        )
    return (
        <>

            {/* <div className='shadow-2xl rounded-lg overflow-hidden hover:translate-y-[-5px] transition duration-300 p-3 space-y-1'>
                <p><span className="font-bold">CODE:</span> <span className="bg-gray-200 p-1 rounded-lg ">{coupon.code}</span></p>
                <p>{coupon.description}</p>
                <p>Discount: {coupon.discountType === 'flat' ? `₹${coupon.discountValue} off` : `${coupon.discountValue}% off`}</p>
                <p>Minimum Order Amount: ₹{coupon.minOrderAmount}</p>
                {coupon.maxDiscount && <p>Maximum Discount: ₹{coupon.maxDiscount}</p>}
                <p>Expiry Date: {new Date(coupon.expiryDate).toLocaleDateString()}</p>
                <p><span className="font-bold">Status:</span> <span className={coupon.isActive ? 'text-green-900 bg-green-200 rounded-lg p-1' : 'text-red-900 bg-red-200 rounded-lg p-1'}>{coupon.isActive ? 'Active' : 'Expired'}</span></p>
            </div>     */}
            <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border border-gray-100 relative">

                {/* Status Badge */}
                <span
                    className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full 
    ${coupon.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"}`}
                >
                    {coupon.isActive ? "Active" : "Expired"}
                </span>

                {/* Coupon Code */}
                <div className="mb-4">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                        Coupon Code
                    </span>
                    <div className="mt-1 inline-block bg-gray-100 text-gray-800 font-bold px-4 py-2 rounded-lg text-sm tracking-wider">
                        {coupon.code}
                    </div>
                </div>

                {/* Discount Highlight */}
                <h2 className="text-2xl font-extrabold text-red-500 mb-2">
                    {coupon.discountType === "flat"
                        ? `₹${coupon.discountValue} OFF`
                        : `${coupon.discountValue}% OFF`}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                    {coupon.description}
                </p>

                {/* Details Section */}
                <div className="space-y-1 text-sm text-gray-700">
                    <p>Min Order: ₹{coupon.minOrderAmount}</p>
                    {/* {coupon.maxDiscount && (
                        <p>Max Discount: ₹{coupon.maxDiscount}</p>
                    )} */}
                    <p>
                        Expires:{" "}
                        {new Date(coupon.expiryDate).toLocaleDateString()}
                    </p>
                </div>

                {/* Apply Button */}
                <button
                    disabled={!coupon.isActive}
                    className={`mt-5 w-full py-2 rounded-xl font-semibold transition 
    ${coupon.isActive
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                >
                    Apply Coupon
                </button>
            </div>
        </>
    )
}
export default Coupon;
import Loader from "../Loader/Loader";

const Coupon = ({ coupon }) => {
    if (!coupon)
        return (
            <Loader />
        )
    return (
        <>

            <div className='shadow-2xl rounded-lg overflow-hidden hover:translate-y-[-5px] transition duration-300 p-3 space-y-1'>
                <p><span className="font-bold">CODE:</span> <span className="bg-gray-200 p-1 rounded-lg ">{coupon.code}</span></p>
                <p>{coupon.description}</p>
                <p>Discount: {coupon.discountType === 'flat' ? `₹${coupon.discountValue} off` : `${coupon.discountValue}% off`}</p>
                <p>Minimum Order Amount: ₹{coupon.minOrderAmount}</p>
                {coupon.maxDiscount && <p>Maximum Discount: ₹{coupon.maxDiscount}</p>}
                <p>Expiry Date: {new Date(coupon.expiryDate).toLocaleDateString()}</p>
                <p><span className="font-bold">Status:</span> <span className={coupon.isActive ? 'text-green-900 bg-green-200 rounded-lg p-1' : 'text-red-900 bg-red-200 rounded-lg p-1'}>{coupon.isActive ? 'Active' : 'Expired'}</span></p>
            </div>
        </>
    )
}
export default Coupon;
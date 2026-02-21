import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer";
import PriceBreakDown from "../../components/Payment/PriceBreakDown";
import OrderSummary from "../../components/Payment/OrderSummary";
import Coupon from "../../components/Cart/coupon";
import coupons from "../../constant/coupon";

const CartPage = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div className="max-w-6xl p-4 mx-auto">
                    <OrderSummary />
                </div>
                <div className="max-w-6xl p-4 mx-auto">
                    <PriceBreakDown />
                </div>
                <div className="max-w-6xl p-4 mx-auto">
                    <h1 className="text-2xl font-bold mb-4">Available Coupons</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
                        {coupons.map((coupon) => (<Coupon key={coupon.id} coupon={coupon} />))}
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}

export default CartPage;
import Footer from "../../components/Landing/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OrderSummary from "../../components/Payment/OrderSummary";
import PriceBreakDown from "../../components/Payment/PriceBreakDown";
import AddressInfo from "../../components/Profile/AddressInfo";


const ConfirmOrder = () => {
    
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div>
                    <header>
                        <div>
                            <h1>Order Review</h1>
                            <p>Step 1 of 3: Review your order details</p>
                        </div>
                    </header>
                    <main>
                        <div>
                            <h1>Order & Address</h1>
                            <OrderSummary />
                            <AddressInfo />
                        </div>
                        <div>
                            <h1>Price summary</h1>
                            <PriceBreakDown />
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
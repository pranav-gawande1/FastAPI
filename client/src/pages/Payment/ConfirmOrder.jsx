import Footer from "../../components/Landing/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PlaceOrder from "../../components/Payment/PlaceOrder";

const ConfirmOrder = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <PlaceOrder />
                <div><Footer /></div>
            </main>
        </>
    );
};

export default ConfirmOrder;
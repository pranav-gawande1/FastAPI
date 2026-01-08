import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer";
import OrdersTable from "../../components/User/OrdersTable";
import OrderData from "../../constant/OrderData";

const UserOrders = () => {
    return (
        <>
            <h1>Hello From Orders</h1>
            <Navbar />
            <main className="mt-16">
                <div className="p-8 max-w-full mx-auto">
                    <OrdersTable orders={OrderData}/>
                </div>
                <Footer />
            </main>
        </>
    );
};
export default UserOrders;
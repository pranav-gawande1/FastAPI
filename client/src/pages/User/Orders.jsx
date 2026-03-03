import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer";
import OrdersTable from "../../components/User/OrdersTable";

const UserOrders = () => {

    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div className="p-8 max-w-full mx-auto">
                    <OrdersTable />
                </div>
                <Footer />
            </main>
        </>
    );
};
export default UserOrders;
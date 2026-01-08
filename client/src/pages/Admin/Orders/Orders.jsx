import React, {useState} from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Landing/Footer";
import OrderTable from "../../../components/Admin/Orders/OrderTable";
import OrderData from "../../../constant/OrderData";

const Orders = () => {

    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div className="p-8 max-w-full mx-auto">
                    <OrderTable orders={OrderData} />
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Orders;
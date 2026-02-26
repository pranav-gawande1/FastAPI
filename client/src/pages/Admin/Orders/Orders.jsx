import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Landing/Footer";
import OrderTable from "../../../components/Admin/Orders/OrderTable";
import OrderData from "../../../constant/OrderData";
import SideBar from "../../../components/Admin/SideBar/SideBar";

const Orders = () => {

    return (
        <>
            <Navbar />
            <div className="flex mt-16">
                <SideBar />
                <div className="flex-1">
                    <div className="p-8 max-w-full mx-auto">
                        <OrderTable orders={OrderData} />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Orders;
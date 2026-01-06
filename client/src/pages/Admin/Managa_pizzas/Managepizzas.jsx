import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Landing/Footer";
import mockData from "../../../constant/mockData";
import PizzaTable from "../../../components/Admin/PizzaTable";

const ManagePizza = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div className="max-w-full mx-auto p-8">
                    <PizzaTable pizzas={mockData} />
                </div>
                <Footer />
            </main>
        </>
    );
};

export default ManagePizza;
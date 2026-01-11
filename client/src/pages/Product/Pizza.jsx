import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer";
import PizzaInfo from "../../components/Products/PizzaInfo";
import pizza from "../../constant/mockData";
import ErrorState from "../../components/Loader/NotFound";

const Pizza = () => {
    const { id } = useParams();
    const pizzaInfo = pizza.find(
        (pizza) => pizza.id.toString() === id
    );
    if (!pizzaInfo) {
        return <ErrorState/>
    }
    return (
        <>
            <Navbar />
            <main className="scroll mt-16">
                {/* <h1>Individual Pizza card: {id}</h1> */}
                <div className="p-8">
                    <PizzaInfo pizza={pizzaInfo} />
                </div>
                <Footer />
            </main>
        </>
    );
};
export default Pizza;
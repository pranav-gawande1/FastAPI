import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Landing/Footer";
import mockData from "../../../constant/mockData";
import PizzaTable from "../../../components/Admin/PizzaTable";
import useFetch from "../../../shared/hooks/useFetch";
import Loader from "../../../components/Loader/Loader";
import ErrorState from "../../../components/Loader/NotFound";

const ManagePizza = () => {
    const { data, loading, error } = useFetch(`/pizza/pizzas`);
    return (
        <>
            <Navbar />
            <main className="mt-16">
                {loading && <Loader />}
                {error && <ErrorState />}
                {!loading && !error && (

                    <div className="max-w-full mx-auto p-8">
                        <PizzaTable pizzas={data?.pizzas} />
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
};

export default ManagePizza;
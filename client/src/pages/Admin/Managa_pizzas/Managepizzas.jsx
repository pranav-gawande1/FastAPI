import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Landing/Footer";
import mockData from "../../../constant/mockData";
import PizzaTable from "../../../components/Admin/PizzaTable";
import useFetch from "../../../shared/hooks/useFetch";
import Loader from "../../../components/Loader/Loader";
import ErrorState from "../../../components/Loader/NotFound";
import { useState } from "react";
import { useEffect } from "react";
import SideBar from "../../../components/Admin/SideBar/SideBar";
import SideBarToggle from "../../../components/Admin/SideBar/sideBarToggle";
import { useSelector } from "react-redux";
import { addItem } from "../../../shared/utils/stateUpdater";

const ManagePizza = () => {
    const [pizzas, setPizzas] = useState([]);
    const { data, loading, error } = useFetch(`/pizza/pizzas`);
    const { isOpen } = useSelector((state) => state.sideBarStatus);

    const handleDeletedPizza = async (pizzaId) => {
        setPizzas(prev => prev.filter(pizza => pizza._id != pizzaId))
    };

    const handeleAddPizza = async (pizzaId) => {
        addItem()
    };

    useEffect(() => {
        if (data?.pizzas) {
            setPizzas(data.pizzas);
        }
    }, [data]);
    return (
        <>
            <Navbar />
            <div className="flex mt-16">
                <SideBarToggle />
                {isOpen && <SideBar />}
                <div className={`flex-1  ${isOpen ? "ml-50": "ml-0"}  w-full transition-all duration-300`}>
                    {loading && <Loader />}
                    {error && <ErrorState />}
                    {!loading && !error && (

                        <div className="max-w-full mx-auto p-8">
                            <PizzaTable pizzas={pizzas}
                                onPizzaDelete={handleDeletedPizza}
                            />
                        </div>
                    )}
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default ManagePizza;
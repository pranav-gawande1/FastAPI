import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Landing/Footer.jsx"
import Hero from "../../components/Landing/Hero.jsx";
import PizzaList from "../../components/Products/PizzaList.jsx";
import PizzaCart from "../../context/PizzaCart.jsx";
const Home = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <Hero />
                <PizzaList />
                <PizzaCart />
                <Footer />
            </main>
        </>
    );
}

export default Home;
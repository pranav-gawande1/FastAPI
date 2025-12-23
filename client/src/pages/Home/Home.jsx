import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Landing/Footer.jsx"
import Hero from "../../components/Landing/Hero.jsx";

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <Hero />
                <Footer />
            </main>
        </>
    );
}

export default Home;
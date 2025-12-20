import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer.jsx"
import Hero from "../../components/Landing/Hero.jsx";
import About from "../../components/Landing/About.jsx";
import Menu from "../../components/Landing/Menu.jsx";
import Contact from "../../components/Landing/Contact.jsx";

const Landing = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <Hero />
                <About />
                <Menu />
                <Contact />
                <Footer />
            </main>
        </>
    )
}

export default Landing;
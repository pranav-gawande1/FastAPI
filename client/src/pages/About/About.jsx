import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer.jsx"
import About_Component from "../../components/About/About_Component.jsx"

const About = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <About_Component />
                <div><Footer /></div>
            </main>
        </>
    );
};

export default About;
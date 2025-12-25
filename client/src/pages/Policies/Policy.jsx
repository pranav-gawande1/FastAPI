import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer";
import Policy_Component from "../../components/Policy/Policy_Component.jsx"

const Policy = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <Policy_Component/>
                <div><Footer /></div>
            </main>
        </>
    )
}

export default Policy;
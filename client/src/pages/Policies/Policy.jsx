import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer";
import PolicyComponent from "../../components/Policy/PolicyComponent.jsx"

const Policy = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <PolicyComponent/>
                <div><Footer /></div>
            </main>
        </>
    )
}

export default Policy;
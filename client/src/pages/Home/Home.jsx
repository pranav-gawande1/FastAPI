import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Landing/Footer.jsx"
import Hero from "../../components/Landing/Hero.jsx";
import Cart from "../../components/Cart/cart.jsx";
import PizzaList from "../../components/Products/PizzaList.jsx";
import { useSelector } from "react-redux";


const Home = () => {
    const { role } = useSelector((state) => state.auth);

    return (
        <>
            <Navbar />
            <main className="mt-16">
                <Hero />
                <PizzaList />
                {role === "user" &&
                    <Cart />
                }
                <Footer />
            </main>
        </>
    );
}

export default Home;
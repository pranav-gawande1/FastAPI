import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Landing/Footer.jsx"
import Hero from "../../components/Landing/Hero.jsx";
import { useCart } from "../../context/PizzaCart.jsx";
import Cart from "../../components/Cart/cart.jsx";
import PizzaList from "../../components/Products/PizzaList.jsx";
import { useSelector } from "react-redux";

const Home = () => {
    const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();
    const { isAuthenticated, role } = useSelector((state) => state.auth);

    return (
        <>
            <Navbar />
            <main className="mt-16">
                <Hero />
                <PizzaList />
                {role === "user" &&
                    <Cart
                        items={cartItems}
                        isOpen={isCartOpen}
                        onClose={() => setIsCartOpen(false)}
                        onRemove={removeFromCart}
                        onUpdateQuantity={updateQuantity}
                    />
                }
                <Footer />
            </main>
        </>
    );
}

export default Home;
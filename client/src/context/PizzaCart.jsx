import { useState } from "react";
import Cart from "../components/Cart/cart";
import pizza from "../constant/mockData.js";
import Navbar from "../components/Navbar/Navbar.jsx";
const PizzaCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const totalItems = pizza.length;
    return(
        <>
        <Navbar onCartClick={() => setIsCartOpen(!isCartOpen)} cartCount={totalItems} />
        <Cart 
        items={pizza}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        
        />
        </>
    );
};

export default PizzaCart;
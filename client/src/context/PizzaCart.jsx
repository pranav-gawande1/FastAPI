// import { createContext, useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const CartContext = createContext();

// export const PizzaCart = ({ children }) => {
//     const [cartItems, setCartItems] = useState(() => {
//         const stored = localStorage.getItem("pizza-cart");
//         return stored ? JSON.parse(stored) : [];
//     });
//     useEffect(() => {
//         localStorage.setItem("pizza-cart", JSON.stringify(cartItems));
//     }, [cartItems]);

//     const [isCartOpen, setIsCartOpen] = useState(false);

//     const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//     const addToCart = (pizza) => {
//         // console.log("DOne")
//         if (totalItems >= 8) {
//             toast.error("You can only add up to 8 items in the cart.");
//             return;
//         }

//         setCartItems(prev =>
//             prev.some(item => item._id === pizza._id)
//                 ? prev.map(item =>
//                     item._id === pizza._id
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 )
//                 : [...prev, { ...pizza, quantity: 1 }]
//         );
//         toast.success(`${pizza.name} added to cart!`)
//         setIsCartOpen(true);
//     }

//     const removeFromCart = (pizzaId) => {
//         setCartItems(prev => prev.filter(item => item._id !== pizzaId)
//         );
//         toast.info(`One item removed from cart!`)
//     };

//     const updateQuantity = (pizzaId, newQuantity) => {
//         if (newQuantity < 1) {
//             removeFromCart(pizzaId);
//             return;
//         }

//         setCartItems(prev =>
//             prev.map(item =>
//                 item._id === pizzaId
//                     ? { ...item, quantity: newQuantity }
//                     : item
//             )
//         );
//     };
//     return (
//         <>
//             <CartContext.Provider
//                 value={{
//                     totalItems,
//                     cartItems,
//                     isCartOpen,
//                     setIsCartOpen,
//                     addToCart,
//                     removeFromCart,
//                     updateQuantity
//                 }}

//             >
//                 {children}
//             </CartContext.Provider>
//         </>
//     );
// };

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error("useCart must be used inside PizzaCart")
//     }
//     return context;
// };

// this code is of no use as i shifted to redux for this
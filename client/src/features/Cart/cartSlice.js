import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: [],
    totalPrice: 0,
    isCartOpen: false,
};

const saveCartItems = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            const Cart = action.payload;

            state.cartItems = Cart.cart_items;
            state.totalPrice = Cart.total_price;
            state.isCartOpen = false;
            saveCartItems(state.cart);
        },

        // addToCart: (state, action) => {
        //     const newItems = action.payload
        //     console.log("Payload:", action.payload);

        //     const totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);

        //     if (totalItems >= 8) {
        //         toast.error("You can add only 8 items at a time in the cart.");
        //         return;
        //     }

        //     const exisitingItem = state.cartItems.find(item => item.pizza._id === newItem.pizza._id);

        //     if (exisitingItem) {
        //         exisitingItem.quantity += 1;
        //     } else {
        //         state.cartItems.push({ ...newItem, quantity: 1 });
        //     }

        //     state.isCartOpen = true;
        //     // saveCartItems(state.cartItems);
        //     toast.success(`${newItem.pizza.name} added to cart!!!`);
        // },

        // removeFromCart: (state, action) => {
        //     const pizzaId = action.payload;

        //     state.cartItems = state.cartItems.filter(item => item._id !== pizzaId);

        //     saveCartItems(state.cartItems);
        //     toast.info("Pizza removed from cart.");
        // },

        // updateQuantity: (state, action) => {
        //     const { pizzaId, newQuantity } = action.payload;

        //     const item = state.cartItems.find(item => item._id === pizzaId);
        //     if (!item) return;

        //     if (newQuantity < 1) {
        //         state.cartItems = cartItems.filter(item => item._id !== pizzaId);
        //     } else {
        //         item.quantity = newQuantity;
        //     }

        //     saveCartItems(state.cartItems);
        // },

        toggleCart: (state, action) => {
            state.isCartOpen = action.payload;
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.totalPrice = 0;
            state.isCartOpen = false;

            localStorage.removeItem("persist:root");
        }
    },
});

export const selectCartItems = state => state.cart.cartItems;
export const selectTotalItems = state =>
    state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);
// export const selectTotal
export const selectIsCartOpen = state => state.cart.isCartOpen;

export const { setCart, toggleCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
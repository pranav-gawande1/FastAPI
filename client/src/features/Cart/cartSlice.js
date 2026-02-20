import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    isCartOpen: false,
    userId: localStorage.getItem("")
}

const saveCartItems = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const pizza = action.payload

            const totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);

            if (totalItems >= 8) {
                toast.error("You can add only 8 items at a time in the cart.");
                return;
            }

            const exisitingItem = state.cartItems.find(item => item._id === pizza._id);

            if (exisitingItem) {
                exisitingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...pizza, quantity: 1 });
            }

            state.isCartOpen = true;
            saveCartItems(state.cartItems);
            toast.success(`${pizza.name} added to cart!!!`);
        },

        removeFromCart: (state, action) => {
            const pizzaId = action.payload;

            state.cartItems = state.cartItems.filter(item => item._id !== pizzaId);

            saveCartItems(state.cartItems);
            toast.info("Pizza removed from cart.");
        },

        updateQuantity: (state, action) => {
            const { pizzaId, newQuantity } = action.payload;

            const item = state.cartItems.find(item => item._id === pizzaId);
            if (!item) return;

            if (newQuantity < 1) {
                state.cartItems = cartItems.filter(item => item._id !== pizzaId);
            } else {
                item.quantity = newQuantity;
            }

            saveCartItems(state.cartItems);
        },

        toggleCart: (state, action) => {
            state.isCartOpen = action.payload;
        },
    },
});

export const selectCartItems = state => state.cart.cartItems;
export const selectTotalItems = state => 
    state.cart.cartItems.reduce((sum ,item) => sum + item.quantity, 0);
// export const selectTotal
export const selectIsCartOpen = state => state.cart.isCartOpen;

export const { addToCart, removeFromCart, updateQuantity, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
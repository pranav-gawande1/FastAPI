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

            state.cartItems = Cart?.cart_items;
            state.totalPrice = Cart?.total_price;
            saveCartItems(state.cartItems);
        },
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
    state.cart?.cartItems?.reduce((sum, item) => sum + item.quantity, 0);
export const selectIsCartOpen = state => state.cart?.isCartOpen;

export const { setCart, toggleCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    total: localStorage.getItem("total")
        ? JSON.parse(localStorage.getItem("total"))
        : [],
    totalItems : localStorage.getItem("totalItems")
        ? JSON.parse(localStorage.getItem("totalItems"))
        : 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload

            state.cart.push(item)
            state.totalItems++
            state.total += item.price
            localStorage.setItem("cart", JSON.stringify(state.cart))
            localStorage.setItem("total", JSON.stringify(state.total))
            localStorage.setItem("totalItems",
                JSON.stringify(state.totalItems))
            toast.success("Pizza Added to cart")
        },

        removeFromCart: (state, action) => {
            const itemId = action.payload
            const index = state.cart.findIndex((item) => item._id === itemId)
            if(index > 0){
                state.totalItems--
                state.total -= state.cart[index].price
                state.cart.splice(index, 1)
                localStorage.setItem("cart", JSON.stringify(state.cart))
                localStorage.setItem("total", JSON.stringify(state.total))
                localStorage.setItem("totalItems", 
                    JSON.stringify(state.totalItems))
                toast.success("Pizza removed from cart")
            }
        },
    }
})
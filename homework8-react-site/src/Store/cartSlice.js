import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const saveToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload)
            const index = state.cart.findIndex(
                (product) => product.id === action.payload.id)
            if (index !== -1) {
                state.cart[index].count = state.cart[index].count + 1
            } else {
                const newProduct = { ...action.payload, count: 1 };
                const products = [...state.cart, newProduct];
                state.cart = products;
            }
            saveToLocalStorage(state.cart);
        },
        deleteFromCart: (state, action) => {
            const products = state.cart.filter(
                (product) => product.id !== action.payload.id,
            );
            state.cart = products;
            saveToLocalStorage(state.cart);
        },
    },
});

export const { addToCart, deleteFromCart } =
    cartSlice.actions;
export default cartSlice.reducer;

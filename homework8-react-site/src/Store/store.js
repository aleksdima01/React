import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productsSlice'

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;

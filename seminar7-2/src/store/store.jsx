import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './userReducer'
import loggerMiddleware from "./loggerMiddleware";

const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});



export default store;
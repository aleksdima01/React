import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './userReducer'
import showUserReducer from './showReducer'
import loggerMiddleware from "./loggerMiddleware";

const store = configureStore({
    reducer: {
        users: usersReducer,
        user: showUserReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});



export default store;
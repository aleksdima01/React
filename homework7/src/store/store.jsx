import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './userReducer'
import showUserReducer from './showReducer'

const store = configureStore({
    reducer: {
        users: usersReducer,
        user: showUserReducer
    },
});

export default store;
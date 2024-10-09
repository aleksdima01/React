import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice';
import favoriteReducer from './slices/favoriteSlice';
import loggerMiddleware from '../services/loggerMiddleware';

const store = configureStore({
    reducer: {
        todo: todoReducer,
        favorite: favoriteReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
    // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),loggerMiddleware],          2 разных способа вызова Middleware

});


export default store;

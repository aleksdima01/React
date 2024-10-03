import { configureStore } from '@reduxjs/toolkit'
// import { counterReducer } from './counterReducer'
// import { userReducer } from './userReducer';
import { switchThemeReducer } from './themeSwitcher';


export const store = configureStore({
    reducer: {
        theme: switchThemeReducer
        // counter: counterReducer,
        // user: userReducer
    }
});
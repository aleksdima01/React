import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from './jokeSlice'
import exchangeReducer from './exchangeSlice'

export const store = configureStore({
    reducer: {
        joke: jokeReducer,
        exchange: exchangeReducer,
    }
})
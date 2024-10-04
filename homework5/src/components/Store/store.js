import { configureStore } from '@reduxjs/toolkit'

import { switchThemeReducer } from '../themeSwitcher';


export const store = configureStore({
    reducer: {
        themes: switchThemeReducer
    }
});
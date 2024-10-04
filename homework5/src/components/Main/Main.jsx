import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import { switchTheme } from '../themeSwitcher';
const Main = () => {
    const { theme } = useSelector((state) => state.themes)
    const dispatch = useDispatch();
    const toggleTheme = () => {
        dispatch(switchTheme());
    }

    return (
        <>
            <div className={theme}>
                <p>Текущая тема: {theme}</p>
            </div>
            <button onClick={toggleTheme}>
                Cменить тему
            </button>
        </>
    )
}
export default Main;

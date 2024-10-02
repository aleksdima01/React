import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useTheme } from '../contexts/ThemeContext';
import withLoadingIndicator from './WithLoadingIndicator';
import { Counter } from './Counter/Counter';

const Main = ({ data }) => {
    const { setUsername } = useContext(UserContext);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={theme}>
            <p>{data}</p>
            <button onClick={() => setUsername(prompt("Напишите имя", ""))}>Сменить имя</button>
            <button onClick={toggleTheme}>
                Cменить тему
            </button>
            <Counter />
        </div>
    )
}
const MainWithLoading = withLoadingIndicator(Main)

export default MainWithLoading;

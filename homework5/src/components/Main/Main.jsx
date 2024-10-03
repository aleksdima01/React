import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { switchTheme } from '../Store/themeSwitcher';
import '../../App.css';
const Main = () => {
    const [theme, setTheme] = useState('light');
    const dispatch = useDispatch();
    const toggleTheme = () => {
        console.log(theme)
        dispatch(switchTheme(theme))
    }
    // const handlerSubmit = (e) => {
    //     e.preventDefault();
    //     if (name.trim() && email.trim()) {
    //         dispatch(updateNameAndEmail({ name, email }));
    //     }
    //     else if (name.trim()) {
    //         dispatch(updateName(name))
    //     }
    //     else if (email.trim()) {
    //         dispatch(updateEmail(email))
    //     }
    //     setEmail('');
    //     setName('');
    // };

    return (
        <div className={theme}>
            <p>Привет</p>
            <button onClick={toggleTheme}>
                Cменить тему
            </button>
        </div>
    )
}
export default Main;

import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useTheme } from '../contexts/ThemeContext';
import withLoadingIndicator from './WithLoadingIndicator';
import { Counter } from './Counter/Counter';
import { useDispatch } from 'react-redux';
import { updateEmail, updateName, updateNameAndEmail } from './Store/userReducer';

const Main = ({ data }) => {
    const { setUsername } = useContext(UserContext);
    const { theme, toggleTheme } = useTheme();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && email.trim()) {
            dispatch(updateNameAndEmail({ name, email }));
        }
        else if (name.trim()) {
            dispatch(updateName(name))
        }
        else if (email.trim()) {
            dispatch(updateEmail(email))
        }
        setEmail('');
        setName('');
    };
    return (

        <div className={theme}>
            <form onSubmit={handlerSubmit} style={{ backgroundColor: '#ccc', padding: '20px' }}>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <button type='submit'>Отправить</button>
            </form>
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

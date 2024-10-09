import React, { useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

const Form = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handlerOnChange = (e) => {
        setValue(e.target.value);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(value));// попадает в payload
        setValue('');
    }
    return (
        <form onSubmit={handlerSubmit}>
            <input type="text" onChange={handlerOnChange} value={value} />
            <Button>Добавить</Button>
        </form>
    )
}
export default Form;

import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/favoriteSlice';

const Goods = ({ products }) => {
    const dispatch = useDispatch();
    return (
        <ul>
            {products.map(({ id, name, description, price }) =>
                <li key={id}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>{price}</p>
                    <Button handlerClick={() => {
                        dispatch(addItem(id))
                    }}>В избранное</Button>
                </li>
            )}
        </ul>
    )
}

export default Goods

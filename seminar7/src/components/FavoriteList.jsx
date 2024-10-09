import React from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../redux/slices/favoriteSlice';

const FavoriteList = ({ products }) => {
    const favorite = useSelector((state) => state.favorite);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Избранное</h2>
            <ul>
                {products
                    .filter((product) => favorite.items.includes(product.id))
                    .map(({ id, name, description, price }) =>
                        <li key={id}>
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <p>{price}</p>
                            <Button handlerClick={() => {
                                dispatch(deleteItem(id))
                            }}>Удалить из избранного</Button>
                        </li>
                    )}
            </ul>
        </div>
    )
}

export default FavoriteList;

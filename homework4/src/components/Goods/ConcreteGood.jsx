import React from 'react'
import { Link, useParams } from 'react-router-dom'
import s from "../../App.module.css";

const ConcreteGood = ({ goods }) => {
    const { productId } = useParams();
    const good = goods.find(good => good.id === parseInt(productId, 10))
    return (
        <div className={s.product_container}>
            <p>{good.title}</p>
            <p>{good.price}</p>
            <Link className={s.link} to={'/goods'}> К странице товаров</Link>
        </div>
    )
}

export default ConcreteGood

import React from 'react'
import { Link } from 'react-router-dom'
import s from "../../App.module.css";

const Goods = ({ items }) => {
    return (
        <ul >
            {items.map((item) => (
                <li key={item.id}>
                    <Link className={s.product_link} to={`/goods/${item.id}`}> {item.title} {item.price}</Link></li>
            ))
            }
        </ul >
    )
}

export default Goods

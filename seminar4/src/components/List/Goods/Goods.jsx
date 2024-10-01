import React from 'react'
import { Link } from 'react-router-dom'

const Goods = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <Link to={`/goods/${item.id}`}> {item.title} {item.price}</Link></li>
            ))
            }
        </ul >
    )
}

export default Goods

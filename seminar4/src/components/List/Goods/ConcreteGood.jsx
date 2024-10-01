import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ConcreteGood = ({ goods }) => {
    const { productId } = useParams();
    const good = goods.find(good => good.id === parseInt(productId, 10))
    return (
        <div>
            <p>{good.title}</p>
            <p>{good.price}</p>
            <Link to={'/goods'}> К странице товаров</Link>
        </div>
    )
}

export default ConcreteGood

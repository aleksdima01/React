import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../Store/cartSlice';
import { Link } from 'react-router-dom';

const ProductsInCart = () => {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    let total = 0;
    cart.forEach(element => {
        total = total + element.price * element.count
    });
    return (
        cart.length !== 0 ?
            <>
                {cart.map(cartItem =>
                    <>
                        <div key={cartItem.id} className="cart-menu__menu-item">
                            <Link to={"/single-page"} className="cart-menu__menu-item__img">
                                <img src={cartItem.image} alt={cartItem.image} />
                            </Link>
                            <Link to={"/single-page"} className="cart-menu__menu-item__text-a">
                                <div className="cart-menu__menu-item__text">
                                    <h3 className="cart-menu__menu-item__h3">{cartItem.name}</h3>
                                    <p className='stars'>
                                        <FontAwesomeIcon icon={faStar} style={{
                                            color: '#e4af48', fontSize: '12px', lineHeight: '1.2',
                                            fontWeight: '400', textTransform: 'uppercase'
                                        }} />
                                        <FontAwesomeIcon icon={faStar} style={{
                                            color: '#e4af48', fontSize: '12px', lineHeight: '1.2',
                                            fontWeight: '400', textTransform: 'uppercase'
                                        }} />
                                        <FontAwesomeIcon icon={faStar} style={{
                                            color: '#e4af48', fontSize: '12px', lineHeight: '1.2',
                                            fontWeight: '400', textTransform: 'uppercase'
                                        }} />
                                        <FontAwesomeIcon icon={faStar} style={{
                                            color: '#e4af48', fontSize: '12px', lineHeight: '1.2',
                                            fontWeight: '400', textTransform: 'uppercase'
                                        }} />
                                        <FontAwesomeIcon icon={faStar} style={{
                                            color: '#e4af48', fontSize: '12px', lineHeight: '1.2',
                                            fontWeight: '400', textTransform: 'uppercase'
                                        }} />
                                    </p>
                                    <p className="cart-menu__menu-item__p">{cartItem.count} <span>x</span> ${cartItem.price} = ${cartItem.count * cartItem.price}</p>
                                </div>
                            </Link>
                            <FontAwesomeIcon className='delete-icon' icon={faTimesCircle} onClick={() => dispatch(deleteFromCart(cartItem))} style={{
                                color: '#c0c0c0', fontSize: '16px', lineHeight: '1.2',
                                fontWeight: '400', marginLeft: '55px'
                            }} />
                        </div>
                    </>)}
                <h2 className="cart-menu__mega-box__h2">TOTAL <span>${total}</span></h2>
            </>
            :
            <div className="cart-menu__menu-item">
                Вы пока ничего не добавили
            </div>
    )
}

export default ProductsInCart

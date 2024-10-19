import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, updateCartCount } from '../../Store/cartSlice';

const CartProducts = () => {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        cart.length !== 0 ?
            <>
                {cart.map(cartItem =>
                    <>
                        <div className="cart-products__cards">
                            <a href="../homework2/single-page.html">
                                <img src={cartItem.image} alt={cartItem.image} />
                                <div className="cart-products__cards__text">
                                    <a className="cart-products__cards__a" href="../homework2/single-page.html">{cartItem.name}</a>
                                    {/* <p className="cart-products__cards__p">Color:<span className="cart-products__cards__span">Red</span></p> */}
                                    <p className="cart-products__cards__p">Size:<span className="cart-products__cards__span">{cartItem.size}</span></p>
                                </div>
                            </a>
                        </div>
                        <p className="cart-products__p">${cartItem.price}</p>
                        <input className="cart-products__input" type="number" min={1} max={50} value={cartItem.count} onChange={(e) => dispatch(updateCartCount([e.target.value, cartItem]))} />
                        <p className="cart-products__p">FREE</p>
                        <p className="cart-products__p">${cartItem.count * cartItem.price}</p>
                        <FontAwesomeIcon className='delete-icon' icon={faTimesCircle} onClick={() => dispatch(deleteFromCart(cartItem))} style={{
                            color: '#c0c0c0', fontSize: '16px', lineHeight: '1.2',
                            fontWeight: '400'
                        }} />
                        <div className="cart-products__border"></div>
                    </>
                )
                }
            </> :
            <div className="cart-products__cards">
                <p className='cart-products__cards__nothing-in-cart'>Вы пока ничего не добавили</p>

            </div>
    )
}
export default CartProducts

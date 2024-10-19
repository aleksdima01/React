import React from 'react'
import "./cart.scss"
import { ReactComponent as FreeDelivery } from "../../svg/free_delivery.svg"
import { ReactComponent as Sales } from "../../svg/sales.svg"
import { ReactComponent as Quality } from "../../svg/quality.svg"
import { ReactComponent as SubscrInfo } from "../../svg/subscr_info.svg"
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CartProducts from '../CartProducts/CartProducts'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllCart } from '../../Store/cartSlice'

const Cart = () => {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    let total = 0;
    cart.forEach(element => {
        total = total + element.price * element.count
    });
    return (
        <div>
            <Header />
            <nav className="new-arrivals">
                <a href="#" className="new-arrivals__link">New Arrivals</a>
                <ul className="ul-refs">
                    <li className="ul-refs__li"><Link to={"/"} className="ul-refs__a">home</Link></li>
                    <li className="ul-refs__li"><Link to={"/products"} className="ul-refs__a">man</Link></li>
                    <li className="ul-refs__li"><Link to={"/products"} className="ul-refs__a">New Arrivals</Link></li>
                </ul>
            </nav>
            <section className="cart-products">
                <div className="cart-products__grid">
                    <h2 className="cart-products__h2 cart-products__h2_justify">Product Details</h2>
                    <h2 className="cart-products__h2">unite Price</h2>
                    <h2 className="cart-products__h2">Quantity</h2>
                    <h2 className="cart-products__h2">shipping</h2>
                    <h2 className="cart-products__h2">Subtotal</h2>
                    <h2 className="cart-products__h2">ACTION</h2>
                    <div className="cart-products__border"></div>
                    <CartProducts />
                </div>
            </section >
            <nav className="cart__buttons">
                <button type='button' className="cart__buttons__button" onClick={() => dispatch(deleteAllCart())}>CLEAR SHOPPING CART</button>
                <Link to={"/products"} className="cart__buttons__button">CONTINUE SHOPPING</Link>
            </nav>
            <div className='sections'>
                <section className="proceed__checkout">
                    <div className="proceed__checkout__adress">
                        <h2 className="proceed__checkout__adress__h2">Shipping Adress</h2>
                        <select className="proceed__checkout__adress__input proceed__checkout__adress__input__text" aria-label="select">
                            <option className="proceed__checkout__adress__input__text" value="0">Bangladesh</option>
                            <option className="proceed__checkout__adress__input__text" value="1">Russia</option>
                            <option className="proceed__checkout__adress__input__text" value="2">China</option>
                            <option className="proceed__checkout__adress__input__text" value="3">Japan</option>
                            <option className="proceed__checkout__adress__input__text" value="4">USA</option>
                            <option className="proceed__checkout__adress__input__text" value="5">Europe</option>
                            <option className="proceed__checkout__adress__input__text" value="6">Africa</option>
                        </select>
                        <input className="proceed__checkout__adress__input proceed__checkout__adress__input__text" type="text"
                            placeholder="State" />
                        <input className="proceed__checkout__adress__input proceed__checkout__adress__input__text" type="text"
                            placeholder="Postcode / Zip" />
                        <a className="proceed__checkout__adress__button" href="#">get a quote</a>
                    </div>
                    <div className="proceed__checkout__discount">
                        <h2 className="proceed__checkout__adress__h2">coupon discount</h2>
                        <p className="proceed__checkout__discount__p">Enter your coupon code if you have one</p>
                        <input className="proceed__checkout__adress__input proceed__checkout__adress__input__text" type="text"
                            placeholder="State" />
                        <a className="proceed__checkout__adress__button proceed__checkout__discount__button" href="#">Apply coupone</a>
                    </div>
                    <div className="proceed__checkout__total">
                        <p className="proceed__checkout__total__p">Sub total &nbsp;&nbsp; ${total}</p>
                        <h2 className="proceed__checkout__total__h2">Grand total &nbsp;&nbsp; <span>${total}</span></h2>
                        <div className="proceed__checkout__total__line"></div>
                        <Link to={"/checkout"} className="proceed__checkout__total__a">proceed to checkout</Link>
                    </div>
                </section>
            </div>
            <div className="sales">
                <div className="free_delivery">
                    <FreeDelivery />
                    <h2 className="sales_text_h2">Free Delivery</h2>
                    <p className="sales_text_p">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion
                        with
                        extensive models.</p>
                </div>
                <div className="free_delivery">
                    <Sales />
                    <h2 className="sales_text_h2">Sales &amp;&nbsp;discounts</h2>
                    <p className="sales_text_p">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion
                        with
                        extensive models.</p>
                </div>
                <div className="free_delivery">
                    <Quality />
                    <h2 className="sales_text_h2">Quality assurance</h2>
                    <p className="sales_text_p">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion
                        with
                        extensive models.</p>
                </div>
            </div>

            <div className="subscribe__div">
                <aside>
                    <div className="subscribe_info">
                        <div className="for_svg">
                            <SubscrInfo />
                        </div>
                        <div className="subscribe_info_text">
                            <h2 className="Vestibulum ">&laquo;“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                                a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”&raquo;</h2>
                            <h2 className="bin_burh">Bin Burhan</h2>
                            <p className="dhaka">Dhaka, Bd</p>
                            <div className="subscribe_info__photo-choose">
                                <a href="#" className="subscribe_info__photo-choose_a"></a>
                                <a href="#" className="subscribe_info__photo-choose_a"></a>
                                <a href="#" className="subscribe_info__photo-choose_a"></a>
                            </div>
                        </div>

                    </div>
                </aside>
                <div className="whiteline"></div>
                <form>
                    <div className="subscribe">
                        <h2 className="subcribe_text_top">SUBSCRIBE</h2>
                        <p className="subcribe_text_bottom">FOR OUR NEWLETTER AND PROMOTION</p>
                        <div className="div_for_input">
                            <div className="div_for_input_left"><input className="input" type="email" placeholder="Enter Your Email"
                                name="Email" />
                            </div>
                            <a className="button_input_right" href="">Subscribe</a>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div >
    )
}

export default Cart;

import React from 'react'
import "./cart.scss"
import { ReactComponent as FreeDelivery } from "../../svg/free_delivery.svg"
import { ReactComponent as Sales } from "../../svg/sales.svg"
import { ReactComponent as Quality } from "../../svg/quality.svg"
import { ReactComponent as SubscrInfo } from "../../svg/subscr_info.svg"
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Cart = () => {
    return (
        <div>
            <Header />
            <nav className="new-arrivals">
                <a href="#" className="new-arrivals__link">New Arrivals</a>
                <ul className="ul-refs">
                    <li className="ul-refs__li"><a className="ul-refs__a" href="../homework1/index.html">home</a></li>
                    <li className="ul-refs__li"><a className="ul-refs__a" href="../homework3/product.html">man</a></li>
                    <li className="ul-refs__li"><a className="ul-refs__a" href="../homework3/product.html">New Arrivals</a></li>
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
                    <div className="cart-products__cards">
                        <a href="../homework2/single-page.html">
                            <img src="./img/man-1.png" alt="man1" />
                            <div className="cart-products__cards__text">
                                <a className="cart-products__cards__a" href="../homework2/single-page.html">Mango People T-shirt</a>
                                <p className="cart-products__cards__p">Color:<span className="cart-products__cards__span">Red</span></p>
                                <p className="cart-products__cards__p">Size:<span className="cart-products__cards__span">Xll</span></p>
                            </div>
                        </a>
                    </div>
                    <p className="cart-products__p">$150</p>
                    <input className="cart-products__input" type="number" min="1" placeholder="2" />
                    <p className="cart-products__p">FREE</p>
                    <p className="cart-products__p">$300</p>
                    {/* <a href="#"> <i className="fa fa-times-circle"
                        style="color:#c0c0c0;font-size: 16px;font-weight: 400;line-height: 1.2;"></i></a> */}
                    <div className="cart-products__border"></div>
                    <div className="cart-products__cards">
                        <a href="../homework2/single-page.html">
                            <img src="./img/man-2.png" alt="man2" />
                            <div className="cart-products__cards__text">
                                <a className="cart-products__cards__a" href="../homework2/single-page.html">Mango People T-shirt</a>
                                <p className="cart-products__cards__p">Color:<span className="cart-products__cards__span">Red</span></p>
                                <p className="cart-products__cards__p">Size:<span className="cart-products__cards__span">Xll</span></p>
                            </div>
                        </a>

                    </div>
                    <p className="cart-products__p">$150</p>
                    <input className="cart-products__input" type="number" min="1" placeholder="2" />
                    <p className="cart-products__p">FREE</p>
                    <p className="cart-products__p">$300</p>
                    {/* <a href="#"> <i className="fa fa-times-circle"
                        style="color:#c0c0c0;font-size: 16px;font-weight: 400;line-height: 1.2;"></i></a> */}
                    <div className="cart-products__border"></div>
                    <div className="cart-products__cards">
                        <a href="../homework2/single-page.html">
                            <img src="./img/man-3.png" alt="man3" />
                            <div className="cart-products__cards__text">
                                <a className="cart-products__cards__a" href="../homework2/single-page.html">Mango People T-shirt</a>
                                <p className="cart-products__cards__p">Color:<span className="cart-products__cards__span">Red</span></p>
                                <p className="cart-products__cards__p">Size:<span className="cart-products__cards__span">Xll</span></p>
                            </div>
                        </a>
                    </div>
                    <p className="cart-products__p">$150</p>
                    <input className="cart-products__input" type="number" min="1" placeholder="2" />
                    <p className="cart-products__p">FREE</p>
                    <p className="cart-products__p">$300</p>
                    {/* <a href="#"> <i className="fa fa-times-circle"
                        style="color:#c0c0c0;font-size: 16px;font-weight: 400;line-height: 1.2;"></i></a> */}
                    <div className="cart-products__border"></div>
                </div>
            </section >
            <nav className="cart__buttons">
                <a href="" className="cart__buttons__button">CLEAR SHOPPING CART</a>
                <a href="" className="cart__buttons__button">CONTINUE SHOPPING</a>
            </nav>
            <div className='sections'>
                <section className="proceed__checkout">
                    <div className="proceed__checkout__adress">
                        <h2 className="proceed__checkout__adress__h2">Shipping Adress</h2>
                        <select className="proceed__checkout__adress__input proceed__checkout__adress__input__text" aria-label="select">
                            <option className="proceed__checkout__adress__input__text" selected>Bangladesh</option>
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
                        <p className="proceed__checkout__total__p">Sub total &nbsp;&nbsp; $900</p>
                        <h2 className="proceed__checkout__total__h2">Grand total &nbsp;&nbsp; <span>$900</span></h2>
                        <div className="proceed__checkout__total__line"></div>
                        <a href="../homework4/chekout.html" className="proceed__checkout__total__a">proceed to checkout</a>
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

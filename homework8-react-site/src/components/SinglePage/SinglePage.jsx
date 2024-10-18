import React from 'react'
import "./single-page-style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Cart } from "../../svg/cart.svg"
import { ReactComponent as SubscrInfo } from "../../svg/subscr_info.svg"
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MainProducts from '../MainProducts/MainProducts'

const SinglePage = () => {
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
            <div className="big-center-photo">
                <a href="#"><img src="./img/big-center-photo.png" alt="big center photo" /></a>
                <button className="big-center-photo__left-button__button" type="button"><FontAwesomeIcon icon={faAngleLeft} style={{ color: "#ffffff", fontSize: "24px" }} />
                </button>
                <button className="big-center-photo__left-button__button big-center-photo__right-button" type="button"><FontAwesomeIcon icon={faAngleRight} style={{ color: "#ffffff", fontSize: "24px" }} /></button>
            </div>
            <div className='sections'>
                <section className="add-to-cart-section">
                    <h2 className="add-to-cart-section__title">WOMEN COLLECTION</h2>
                    <div className="add-to-cart-section__border"></div>
                    <h2 className="add-to-cart-section__title2">Moschino Cheap And Chic</h2>
                    <div className="add-to-cart-section__text">
                        <p className="add-to-cart-section__text__style">Compellingly actualize fully researched processes before
                            proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services.
                            Completely visualize parallel core competencies rather than exceptional portals.</p>
                    </div>
                    <div className="add-to-cart-section__material">
                        <p className="add-to-cart-section__material__left">MATERIAL:<span
                            className="add-to-cart-section__material__left__span">COTTON</span></p>
                        <p className="add-to-cart-section__material__left">DESIGNER:<span
                            className="add-to-cart-section__material__left__span">BINBURHAN</span></p>
                    </div>
                    <div className="add-to-cart-section__price">$561;</div>
                    <div className="add-to-cart-section__strip"></div>
                    <div className="add-to-cart-section__choosers">
                        <div className="add-to-cart-section__choosers__pos">
                            <p className="add-to-cart-section__choosers__pos__text">CHOOSE COLOR</p>
                            <input className="add-to-cart-section__choosers__pos__input" type="color" value="#DC143C" />
                        </div>
                        <div className="add-to-cart-section__choosers__pos">
                            <p className="add-to-cart-section__choosers__pos__text">CHOOSE SIZE</p>
                            <input className="add-to-cart-section__choosers__pos__input" type="text" placeholder="XXL" />
                        </div>
                        <div className="add-to-cart-section__choosers__pos">
                            <p className="add-to-cart-section__choosers__pos__text">QUANTITY</p>
                            <input className="add-to-cart-section__choosers__pos__input" type="number" min="1" value="1" />
                        </div>
                    </div>
                    <a href="#">
                        <div className="add-to-cart-section__button">
                            <Cart />
                            Add to&nbsp;Cart
                        </div>
                    </a>
                </section>

                <section>
                    <div className="cards-section-single">
                        <h3 className="item-title">you may like also</h3>
                        {/* <div className="item-box"> */}
                        <div className="products">
                            <MainProducts count={4} />

                        </div>
                    </div>
                </section>
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
        </div>
    )
}

export default SinglePage;

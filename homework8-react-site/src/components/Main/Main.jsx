import React from 'react'
import "./style.scss"
import { ReactComponent as FreeDelivery } from "../../svg/free_delivery.svg"
import { ReactComponent as Sales } from "../../svg/sales.svg"
import { ReactComponent as Quality } from "../../svg/quality.svg"
import { ReactComponent as SubscrInfo } from "../../svg/subscr_info.svg"
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MainProducts from '../MainProducts/MainProducts'

const Main = () => {

    return (
        <div>
            <Header />
            <section>
                <div className="top-photo">
                    <div className="top-photo-text">
                        <div className="rectangle"></div>
                        <h2 className="h2-1">THE BRAND </h2>
                        <h2 className="h2-2">OF&nbsp;LUXERIOUS</h2>
                        <h2 className="h2-3">FASHION</h2>
                    </div>
                </div>
            </section>
            <section>
                <div className="center-photos">
                    <Link className="women_a" to={'/products'}>
                        <div className="women"> <img src="./img/women.png" alt="women" />
                            <div className="text-women">
                                <h2 className="img-text-top">30% OFFER</h2>
                                <h2 className="img-text-bottom for-women">WOMEN</h2>
                            </div>
                        </div>
                    </Link>
                    <Link className="men2_a" to={'/products'}>
                        <div className="men2">
                            <img src="./img/men-2.png" alt="men2" />
                            <div className="text-man">
                                <h2 className="img-text-top">HOT DEAL</h2>
                                <h2 className="img-text-bottom">FOR MEN</h2>
                            </div>
                        </div>
                    </Link>
                    <Link className="child_a" to={'/products'}>
                        <div className="child">
                            <img src="./img/child.png" alt="child" />
                            <div className="text-child">
                                <h2 className="img-text-top kids-arrivals">NEW ARRIVALS</h2>
                                <h2 className="img-text-bottom">FOR KIDS</h2>
                            </div>
                        </div>
                    </Link>
                    <Link className="accesories_a" to={'/products'}>
                        <div className="accesories">
                            <img src="./img/accesories.png" alt="accesories" />
                            <div className="text-accesories">
                                <h2 className="img-text-top">LUXIROUS &amp;&nbsp;TRENDY
                                </h2>
                                <h2 className="img-text-bottom"> ACCESORIES</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            <article>
                <div className="products-top">
                    <h2 className="products-top-text-top">Fetured Items</h2>
                    <h2 className="products-top-text-bottom">Shop for items based on&nbsp;what we&nbsp;featured in&nbsp;this week
                    </h2>
                </div>
            </article>
            <div className="products">
                <MainProducts />
            </div>
            <Link to={'/products'}>
                <div className="button">
                    <p className="button-text">Browse All Products </p>
                </div>
            </Link>
            <div className="big__offer">
                <div className="big_offer_img"><img src="./img/big_offer_img.png" alt="big_offer" /></div>
                <div className="sales_grid">
                    <div className="free_delivery">
                        <FreeDelivery />
                        <div className="free_delivery_text">
                            <h2 className="sales_grid_text_h2">Free Delivery</h2>
                            <p className="sales_grid_text_p">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov
                                tion
                                with
                                extensive models.</p>
                        </div>
                    </div>
                    <div className="free_delivery">
                        <Sales />
                        <div className="free_delivery_text">
                            <h2 className="sales_grid_text_h2">Sales &amp;&nbsp;discounts</h2>
                            <p className="sales_grid_text_p">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov
                                tion
                                with
                                extensive models.</p>
                        </div>
                    </div>
                    <div className="free_delivery">
                        <Quality />
                        <div className="free_delivery_text">
                            <h2 className="sales_grid_text_h2">Quality assurance</h2>
                            <p className="sales_grid_text_p">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov
                                tion
                                with
                                extensive models.</p>
                        </div>
                    </div>
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
                <form action="">
                    <div className="subscribe">
                        <h2 className="subcribe_text_top">SUBSCRIBE</h2>
                        <p className="subcribe_text_bottom">FOR OUR NEWLETTER AND PROMOTION</p>
                        <div className="div_for_input">
                            <div className="div_for_input_left"><input className="input" type="email" placeholder="Enter Your Email"
                                name="Email" />
                            </div>
                            <a className="button_input_right" href="#">Subscribe</a>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Main

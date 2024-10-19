import React from 'react'
import "./checkout.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as FreeDelivery } from "../../svg/free_delivery.svg"
import { ReactComponent as Sales } from "../../svg/sales.svg"
import { ReactComponent as Quality } from "../../svg/quality.svg"
import { ReactComponent as SubscrInfo } from "../../svg/subscr_info.svg"
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Checkout = () => {
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
            <nav className="left-menu-nav-checkout">
                <div className="checkout-left-menu">
                    <ul className="checkout-left-menu__ul">
                        <li className="checkout-left-menu__li">
                            <label htmlFor="psbtn1" className="checkout-left-menu__link">01.&nbsp;&nbsp;Shipping Adress</label>
                            <input type="checkbox" id="psbtn1" />
                            <div className="checkout-left-menu__box">
                                <div className="checkout-left-menu__box__item">
                                    <h2 className="checkout-left-menu__box__item__h2">Check as a guest or register</h2>
                                    <p className="checkout-left-menu__box__item__p">Register with us for future convenience</p>
                                    <p className="checkout-left-menu__box__item__check">
                                        <input className="checkout-left-menu__box__item__input" type="radio" name="check" id="checkout"
                                            checked />
                                        <label className="checkout-left-menu__box__item__checkout" htmlFor="checkout">checkout as guest</label>
                                    </p>
                                    <p className="checkout-left-menu__box__item__check checkout-left-menu__box__item__check_pb">
                                        <input className="checkout-left-menu__box__item__input" type="radio" name="check" id="register" />
                                        <label className="checkout-left-menu__box__item__checkout" htmlFor="register">register</label>
                                    </p>
                                    <h2 className="checkout-left-menu__box__item__h2">register and save time!</h2>
                                    <p className="checkout-left-menu__box__item__p">Register with us for future convenience</p>
                                    <a className="checkout-left-menu__box__item__p checkout-left-menu__box__item__p_pad checkout-left-menu__box__item__a_hov">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} style={{ color: "#b3b2b2", fontSize: "13px", paddingRight: "4px" }} />Fast
                                        and easy checkout</a>
                                    <a className="checkout-left-menu__box__item__p checkout-left-menu__box__item__a_hov">

                                        <FontAwesomeIcon icon={faAngleDoubleRight} style={{ color: "#b3b2b2", fontSize: "13px", paddingRight: "4px" }} />Easy access to your
                                        order history and
                                        status
                                    </a>
                                    <a className="checkout-left-menu__box__item__a" href="#">Continue</a>
                                </div>
                                <div className="checkout-left-menu__box__item">
                                    <h2 className="checkout-left-menu__box__item__h2">Already registed?</h2>
                                    <p className="checkout-left-menu__box__item__p checkout-left-menu__box__item__p_pad27">Please log in below</p>
                                    <h2 className="checkout-left-menu__box__item__h2 checkout-left-menu__box__item__h2_12px">EMAIL ADDRESS <span
                                        className="required_field">*</span></h2>
                                    <input className="checkout-left-menu__box__item__email" type="email" />
                                    <h2 className="checkout-left-menu__box__item__h2 checkout-left-menu__box__item__h2_12px">PASSWORD <span
                                        className="required_field">*</span></h2>
                                    <input className="checkout-left-menu__box__item__email" type="password" />
                                    <p className="checkout-left-menu__box__item__required">* Required Fileds</p>
                                    <div className="checkout-left-menu__box__item__forgot__passwd">
                                        <a className="checkout-left-menu__box__item__a" href="#">Log in</a>
                                        <a className="checkout-left-menu__box__item__forgot__passwd__a" href="#">Forgot Password </a>
                                    </div>
                                </div>
                            </div>
                            <div className="border"></div>
                        </li>
                        <li className="checkout-left-menu__li">
                            <label htmlFor="psbtn2" className="checkout-left-menu__link">02.&nbsp;&nbsp;BILLING INFORMATION
                            </label>
                            <input type="checkbox" id="psbtn2" />
                            <div className="checkout-left-menu__box">
                                <p className="lorem_p"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam at earum
                                    nesciunt
                                    accusantium vel, non, provident nulla quas vero necessitatibus eius recusandae libero iure,
                                    possimus perferendis quo? Sed dolore voluptatibus doloribus. Consectetur, quis a tenetur
                                    pariatur quod veniam, eius officia totam facere quaerat reiciendis dolores earum quam
                                    tempore voluptas exercitationem dolorem deleniti est autem doloremque, quidem quos! Est
                                    doloribus doloremque, perspiciatis temporibus repudiandae neque laudantium excepturi. Quos
                                    sunt itaque dolore obcaecati beatae sint placeat similique, necessitatibus tempore
                                    voluptatem maiores veritatis odio officiis fuga totam nam reprehenderit blanditiis
                                    laudantium praesentium facilis! Quia, atque sit et aspernatur eum tenetur suscipit dolores
                                    quae ducimus nulla! Modi, quam quos! Ut culpa, dolores esse expedita dignissimos deleniti
                                    aspernatur hic, soluta optio veniam, consectetur ad impedit nostrum nulla molestiae
                                    excepturi omnis quidem ipsam numquam animi veritatis aliquam quisquam? Eligendi et obcaecati
                                    animi eveniet hic natus recusandae? Veritatis laborum amet eligendi facilis, tempore saepe
                                    eveniet ea reiciendis.
                                </p>
                            </div>
                            <div className="border"></div>
                        </li>
                        <li className="checkout-left-menu__li">
                            <label htmlFor="psbtn3" className="checkout-left-menu__link"> 03.&nbsp;&nbsp;SHIPPING INFORMATION</label>
                            <input type="checkbox" id="psbtn3" />
                            <div className="checkout-left-menu__box">
                                <p className="lorem_p"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam at earum
                                    nesciunt
                                    accusantium vel, non, provident nulla quas vero necessitatibus eius recusandae libero iure,
                                    possimus perferendis quo? Sed dolore voluptatibus doloribus. Consectetur, quis a tenetur
                                    pariatur quod veniam, eius officia totam facere quaerat reiciendis dolores earum quam
                                    tempore voluptas exercitationem dolorem deleniti est autem doloremque, quidem quos! Est
                                    doloribus doloremque, perspiciatis temporibus repudiandae neque laudantium excepturi. Quos
                                    sunt itaque dolore obcaecati beatae sint placeat similique, necessitatibus tempore
                                    voluptatem maiores veritatis odio officiis fuga totam nam reprehenderit blanditiis
                                    laudantium praesentium facilis! Quia, atque sit et aspernatur eum tenetur suscipit dolores
                                    quae ducimus nulla! Modi, quam quos! Ut culpa, dolores esse expedita dignissimos deleniti
                                    aspernatur hic, soluta optio veniam, consectetur ad impedit nostrum nulla molestiae
                                    excepturi omnis quidem ipsam numquam animi veritatis aliquam quisquam? Eligendi et obcaecati
                                    animi eveniet hic natus recusandae? Veritatis laborum amet eligendi facilis, tempore saepe
                                    eveniet ea reiciendis.
                                </p>
                            </div>
                            <div className="border"></div>
                        </li>
                        <li className="checkout-left-menu__li">
                            <label htmlFor="psbtn4" className="checkout-left-menu__link"> 04.&nbsp;&nbsp;SHIPPING METHOD</label>
                            <input type="checkbox" id="psbtn4" />
                            <div className="checkout-left-menu__box">
                                <p className="lorem_p"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam at earum
                                    nesciunt
                                    accusantium vel, non, provident nulla quas vero necessitatibus eius recusandae libero iure,
                                    possimus perferendis quo? Sed dolore voluptatibus doloribus. Consectetur, quis a tenetur
                                    pariatur quod veniam, eius officia totam facere quaerat reiciendis dolores earum quam
                                    tempore voluptas exercitationem dolorem deleniti est autem doloremque, quidem quos! Est
                                    doloribus doloremque, perspiciatis temporibus repudiandae neque laudantium excepturi. Quos
                                    sunt itaque dolore obcaecati beatae sint placeat similique, necessitatibus tempore
                                    voluptatem maiores veritatis odio officiis fuga totam nam reprehenderit blanditiis
                                    laudantium praesentium facilis! Quia, atque sit et aspernatur eum tenetur suscipit dolores
                                    quae ducimus nulla! Modi, quam quos! Ut culpa, dolores esse expedita dignissimos deleniti
                                    aspernatur hic, soluta optio veniam, consectetur ad impedit nostrum nulla molestiae
                                    excepturi omnis quidem ipsam numquam animi veritatis aliquam quisquam? Eligendi et obcaecati
                                    animi eveniet hic natus recusandae? Veritatis laborum amet eligendi facilis, tempore saepe
                                    eveniet ea reiciendis.
                                </p>
                            </div>
                            <div className="border"></div>
                        </li>
                        <li className="checkout-left-menu__li">
                            <label htmlFor="psbtn5" className="checkout-left-menu__link">05.&nbsp;&nbsp;PAYMENT METHOD</label>
                            <input type="checkbox" id="psbtn5" />
                            <div className="checkout-left-menu__box">
                                <p className="lorem_p"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam at earum
                                    nesciunt
                                    accusantium vel, non, provident nulla quas vero necessitatibus eius recusandae libero iure,
                                    possimus perferendis quo? Sed dolore voluptatibus doloribus. Consectetur, quis a tenetur
                                    pariatur quod veniam, eius officia totam facere quaerat reiciendis dolores earum quam
                                    tempore voluptas exercitationem dolorem deleniti est autem doloremque, quidem quos! Est
                                    doloribus doloremque, perspiciatis temporibus repudiandae neque laudantium excepturi. Quos
                                    sunt itaque dolore obcaecati beatae sint placeat similique, necessitatibus tempore
                                    voluptatem maiores veritatis odio officiis fuga totam nam reprehenderit blanditiis
                                    laudantium praesentium facilis! Quia, atque sit et aspernatur eum tenetur suscipit dolores
                                    quae ducimus nulla! Modi, quam quos! Ut culpa, dolores esse expedita dignissimos deleniti
                                    aspernatur hic, soluta optio veniam, consectetur ad impedit nostrum nulla molestiae
                                    excepturi omnis quidem ipsam numquam animi veritatis aliquam quisquam? Eligendi et obcaecati
                                    animi eveniet hic natus recusandae? Veritatis laborum amet eligendi facilis, tempore saepe
                                    eveniet ea reiciendis.
                                </p>
                            </div>
                            <div className="border"></div>
                        </li>
                        <li className="checkout-left-menu__li">
                            <label htmlFor="psbtn6" className="checkout-left-menu__link">06.&nbsp;&nbsp;ORDER REVIEW</label>
                            <input type="checkbox" id="psbtn6" />
                            <div className="checkout-left-menu__box">
                                <p className="lorem_p"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam at earum
                                    nesciunt
                                    accusantium vel, non, provident nulla quas vero necessitatibus eius recusandae libero iure,
                                    possimus perferendis quo? Sed dolore voluptatibus doloribus. Consectetur, quis a tenetur
                                    pariatur quod veniam, eius officia totam facere quaerat reiciendis dolores earum quam
                                    tempore voluptas exercitationem dolorem deleniti est autem doloremque, quidem quos! Est
                                    doloribus doloremque, perspiciatis temporibus repudiandae neque laudantium excepturi. Quos
                                    sunt itaque dolore obcaecati beatae sint placeat similique, necessitatibus tempore
                                    voluptatem maiores veritatis odio officiis fuga totam nam reprehenderit blanditiis
                                    laudantium praesentium facilis! Quia, atque sit et aspernatur eum tenetur suscipit dolores
                                    quae ducimus nulla! Modi, quam quos! Ut culpa, dolores esse expedita dignissimos deleniti
                                    aspernatur hic, soluta optio veniam, consectetur ad impedit nostrum nulla molestiae
                                    excepturi omnis quidem ipsam numquam animi veritatis aliquam quisquam? Eligendi et obcaecati
                                    animi eveniet hic natus recusandae? Veritatis laborum amet eligendi facilis, tempore saepe
                                    eveniet ea reiciendis.
                                </p>
                            </div>
                            <div className="border"></div>
                        </li>
                    </ul>
                </div>
            </nav>

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

export default Checkout;

import React from 'react'
import "./single-page-style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Cart } from "../../svg/cart.svg"
import { ReactComponent as SubscrInfo } from "../../svg/subscr_info.svg"
import { ReactComponent as Footer1 } from "../../svg/footer1.svg"
import { ReactComponent as Footer2 } from "../../svg/footer2.svg"
import { ReactComponent as Footer3 } from "../../svg/footer3.svg"
import { ReactComponent as Footer4 } from "../../svg/footer4.svg"
import { ReactComponent as Footer5 } from "../../svg/footer5.svg"

const SinglePage = () => {
    return (
        <div>
            <header>
                <div className="header">
                    <div className="left-header-block">
                        <a className="header-logo" href="../homework1/index.html">
                            <img src="./img/lef-logo.svg" alt="Левое лого" />
                            <p className="BRAN">BRAN<span className="D">D</span> </p>
                        </a>
                        <div className="browse">
                            <div className="top-menu">
                                <ul className="top-menu__ul">
                                    <li className="top-menu__li">
                                        <label for="psbtn1" className="top-menu__link">
                                            Browse <FontAwesomeIcon icon={faCaretDown} style={{ color: "#838383", marginLeft: "8px", fontSize: "14px", marginTop: "3px" }} />
                                        </label>
                                        <input type="checkbox" id="psbtn1" />
                                        <div className="top-menu__box">
                                            <h3 className="top-menu__box__heading">Women</h3>
                                            <a href="#" className="top-menu__box__link">Dresses</a>
                                            <a href="#" className="top-menu__box__link">Tops</a>
                                            <a href="#" className="top-menu__box__link">Sweaters/Knits</a>
                                            <a href="#" className="top-menu__box__link">Jackets/Coats</a>
                                            <a href="#" className="top-menu__box__link">Blazers</a>
                                            <a href="#" className="top-menu__box__link">Denim</a>
                                            <a href="#" className="top-menu__box__link">Leggings/Pants</a>
                                            <a href="#" className="top-menu__box__link">Skirts/Shorts</a>
                                            <a href="#" className="top-menu__box__link">Accessories</a>
                                            <h3 className="top-menu__box__heading">Man</h3>
                                            <a href="#" className="top-menu__box__link">Tees/Tank tops</a>
                                            <a href="#" className="top-menu__box__link">Shirts/Polos</a>
                                            <a href="#" className="top-menu__box__link">Sweaters</a>
                                            <a href="#" className="top-menu__box__link">Sweatshirts/Hoodies</a>
                                            <a href="#" className="top-menu__box__link">Blazers</a>
                                            <a href="#" className="top-menu__box__link">Jackets/vests</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <form>
                                <input className="search_field" type="search" placeholder="Search for Item" />
                                <button className="search_button" type="submit"><i><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#a4a4a4' }} /></i>
                                </button>
                            </form>
                        </div>

                    </div>
                    <div className="right-header-block">
                        <li className="cart-menu">
                            <a href="../homework5/cart.html">
                                <Cart />
                            </a>
                            <div className="cart-menu__mega-box">
                                <div className="cart-menu__menu-item">
                                    <a href="../homework2/single-page.html" className="cart-menu__menu-item__img">
                                        <img src="./img/cart-menu-man.png" alt="cart-menu-man" />
                                    </a>
                                    <a href="../homework2/single-page.html" className="cart-menu__menu-item__text-a">
                                        <div className="cart-menu__menu-item__text">
                                            <h3 className="cart-menu__menu-item__h3">Rebox Zane</h3>
                                            {/* <p>
                                                <i className="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i className="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i className="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i className="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i className="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                            </p> */}
                                            <p className="cart-menu__menu-item__p">1 <span>x</span> $250</p>
                                        </div>
                                    </a>
                                    {/* <a href="#"> <i className="fa fa-times-circle"
                                        style="color:#c0c0c0;font-size: 16px;font-weight: 400;line-height: 1.2;margin-left: 55px;"></i></a> */}
                                </div>
                                <div className="cart-menu__menu-item__border"></div>
                                <div className="cart-menu__menu-item">
                                    <a href="../homework2/single-page.html" className="cart-menu__menu-item__img">
                                        <img src="./img/cart_menu_woman.png" alt="cart-menu-man" />
                                    </a>
                                    <a href="../homework2/single-page.html" className="cart-menu__menu-item__text-a">
                                        <div className="cart-menu__menu-item__text">
                                            <h3 className="cart-menu__menu-item__h3">Rebox Zane</h3>
                                            {/* <p>
                                                <i className="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i className="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i className="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i className="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i className="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                            </p> */}
                                            <p className="cart-menu__menu-item__p">1 <span>x</span> $250</p>
                                        </div>
                                    </a>
                                    {/* <a href="#"> <i className="fa fa-times-circle"
                                        style="color:#c0c0c0;font-size: 16px;font-weight: 400;line-height: 1.2;margin-left: 55px;"></i></a> */}
                                </div>
                                <div className="cart-menu__menu-item__border"></div>
                                <h2 className="cart-menu__mega-box__h2">TOTAL <span>$500.00</span></h2>
                                <a href="../homework4/chekout.html" className="cart-menu__mega-box__a">CHECKOUT</a>
                                <a href="../homework5/cart.html" className=" cart-menu__mega-box__a cart-menu__mega-box__a_cart">Go
                                    to cart</a>
                            </div>
                        </li>
                        <button className="button-right" type="button">My Account<FontAwesomeIcon icon={faCaretDown} style={{ color: "#fff", fontSize: "14px", marginLeft: "8px" }} />
                        </button>
                    </div>
                </div>
            </header>
            <nav>
                <div className="header_bottom">
                    <ul className="menu">
                        <li className="menu-list"><a className="menu-link" href="#">Home</a>
                            <div className="mega-box">
                                <div className="menu-item">
                                    <h3 className="menu-headding">Women</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <a href="#" className="mega-link">Blazers</a>
                                    <a href="#" className="mega-link">Denim</a>
                                    <a href="#" className="mega-link">Leggins/Pants</a>
                                    <a href="#" className="mega-link">Skirts/Shorts</a>
                                    <a href="#" className="mega-link">Accesories</a>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Women</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item menu-item-in-item">
                                        <h3 className="menu-headding">Women</h3>
                                        <a href="#" className="mega-link">Dresses</a>
                                        <a href="#" className="mega-link">Tops</a>
                                        <a href="#" className="mega-link">Sweaters/Knits</a>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Women</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item-img-container">
                                        <img className="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                                        <div className="menu-item-img-container-text">Super<br />sale!</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-list"><a className="menu-link" href="#">Man</a>
                            <div className="mega-box">
                                <div className="menu-item">
                                    <h3 className="menu-headding">Man</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <a href="#" className="mega-link">Blazers</a>
                                    <a href="#" className="mega-link">Denim</a>
                                    <a href="#" className="mega-link">Leggins/Pants</a>
                                    <a href="#" className="mega-link">Skirts/Shorts</a>
                                    <a href="#" className="mega-link">Accesories</a>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Man</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item menu-item-in-item">
                                        <h3 className="menu-headding">Man</h3>
                                        <a href="#" className="mega-link">Dresses</a>
                                        <a href="#" className="mega-link">Tops</a>
                                        <a href="#" className="mega-link">Sweaters/Knits</a>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Man</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item-img-container">
                                        <img className="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                                        <div className="menu-item-img-container-text">Super<br />sale!</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-list"><a className="menu-link" href="#">Women</a>
                            <div className="mega-box">
                                <div className="menu-item">
                                    <h3 className="menu-headding">Women</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <a href="#" className="mega-link">Blazers</a>
                                    <a href="#" className="mega-link">Denim</a>
                                    <a href="#" className="mega-link">Leggins/Pants</a>
                                    <a href="#" className="mega-link">Skirts/Shorts</a>
                                    <a href="#" className="mega-link">Accesories</a>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Women</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item menu-item-in-item">
                                        <h3 className="menu-headding">Women</h3>
                                        <a href="#" className="mega-link">Dresses</a>
                                        <a href="#" className="mega-link">Tops</a>
                                        <a href="#" className="mega-link">Sweaters/Knits</a>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Women</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item-img-container">
                                        <img className="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                                        <div className="menu-item-img-container-text">Super<br />sale!</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-list"><a className="menu-link" href="#">Kids</a>
                            <div className="mega-box">
                                <div className="menu-item">
                                    <h3 className="menu-headding">Kids</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <a href="#" className="mega-link">Blazers</a>
                                    <a href="#" className="mega-link">Denim</a>
                                    <a href="#" className="mega-link">Leggins/Pants</a>
                                    <a href="#" className="mega-link">Skirts/Shorts</a>
                                    <a href="#" className="mega-link">Accesories</a>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Kids</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item menu-item-in-item">
                                        <h3 className="menu-headding">Kids</h3>
                                        <a href="#" className="mega-link">Dresses</a>
                                        <a href="#" className="mega-link">Tops</a>
                                        <a href="#" className="mega-link">Sweaters/Knits</a>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Kids</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item-img-container">
                                        <img className="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                                        <div className="menu-item-img-container-text">Super<br />sale!</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-list last"><a className="menu-link" href="#">Accessories</a>
                            <div className="mega-box">
                                <div className="menu-item">
                                    <h3 className="menu-headding">Accessories</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <a href="#" className="mega-link">Blazers</a>
                                    <a href="#" className="mega-link">Denim</a>
                                    <a href="#" className="mega-link">Leggins/Pants</a>
                                    <a href="#" className="mega-link">Skirts/Shorts</a>
                                    <a href="#" className="mega-link">Accesories</a>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Accessories</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item menu-item-in-item">
                                        <h3 className="menu-headding">Accessories</h3>
                                        <a href="#" className="mega-link">Dresses</a>
                                        <a href="#" className="mega-link">Tops</a>
                                        <a href="#" className="mega-link">Sweaters/Knits</a>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Accessories</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item-img-container">
                                        <img className="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                                        <div className="menu-item-img-container-text">Super<br />sale!</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-list last"><a className="menu-link" href="#">Featured</a>
                            <div className="mega-box">
                                <div className="menu-item">
                                    <h3 className="menu-headding">Featured</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <a href="#" className="mega-link">Blazers</a>
                                    <a href="#" className="mega-link">Denim</a>
                                    <a href="#" className="mega-link">Leggins/Pants</a>
                                    <a href="#" className="mega-link">Skirts/Shorts</a>
                                    <a href="#" className="mega-link">Accesories</a>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Featured</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item menu-item-in-item">
                                        <h3 className="menu-headding">Featured</h3>
                                        <a href="#" className="mega-link">Dresses</a>
                                        <a href="#" className="mega-link">Tops</a>
                                        <a href="#" className="mega-link">Sweaters/Knits</a>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Featured</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item-img-container">
                                        <img className="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                                        <div className="menu-item-img-container-text">Super<br />sale!</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-list last"><a className="menu-link" href="#">Hot Deals</a>
                            <div className="mega-box">
                                <div className="menu-item">
                                    <h3 className="menu-headding">Hot Deals</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <a href="#" className="mega-link">Blazers</a>
                                    <a href="#" className="mega-link">Denim</a>
                                    <a href="#" className="mega-link">Leggins/Pants</a>
                                    <a href="#" className="mega-link">Skirts/Shorts</a>
                                    <a href="#" className="mega-link">Accesories</a>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Hot Deals</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item menu-item-in-item">
                                        <h3 className="menu-headding">Hot Deals</h3>
                                        <a href="#" className="mega-link">Dresses</a>
                                        <a href="#" className="mega-link">Tops</a>
                                        <a href="#" className="mega-link">Sweaters/Knits</a>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Hot Deals</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item-img-container">
                                        <img className="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                                        <div className="menu-item-img-container-text">Super<br />sale!</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
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
                    <div className="cards-section">
                        <h3 className="item-title">you may like also</h3>
                        <div className="item-box">
                            <div className="item">
                                <a href="./single-page.html" className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src="img/cart1.png" alt="item" />
                                    </div>
                                    <div className="txt-box">
                                        <p className="description">Mango People T-shirt</p>
                                        <p className="item-price">$52.00</p>
                                    </div>
                                </a>
                                <div className="add-box">
                                    <a href="222222" className="add">
                                        <img src="img/cart-add.svg" alt="cart" className="cart" />
                                        <p className="add-txt">Add to Cart</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <a href="./single-page.html" className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src="img/cart2.png" alt="item" />
                                    </div>
                                    <div className="txt-box">
                                        <p className="description">Mango People T-shirt</p>
                                        <p className="item-price">$52.00</p>
                                    </div>
                                </a>
                                <div className="add-box">
                                    <a href="222222" className="add">
                                        <img src="img/cart-add.svg" alt="cart" className="cart" />
                                        <p className="add-txt">Add to Cart</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <a href="./single-page.html" className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src="img/cart3.png" alt="item" />
                                    </div>
                                    <div className="txt-box">
                                        <p className="description">Mango People T-shirt</p>
                                        <p className="item-price">$52.00</p>
                                    </div>
                                </a>
                                <div className="add-box">
                                    <a href="222222" className="add">
                                        <img src="img/cart-add.svg" alt="cart" className="cart" />
                                        <p className="add-txt">Add to Cart</p>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <a href="./single-page.html" className="item-link">
                                    <img className="item-img item-img-4" src="img/cart4.png" alt="item" />
                                    <div className="txt-box">
                                        <p className="description">Mango People T-shirt</p>
                                        <p className="item-price">$52.00</p>
                                    </div>
                                </a>
                                <div className="add-box">
                                    <a href="222222" className="add">
                                        <img src="img/cart-add.svg" alt="cart" className="cart" />
                                        <p className="add-txt">Add to Cart</p>
                                    </a>
                                </div>
                            </div>

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
            <nav>
                <div className="top-footer">
                    <div className="top-footer-1">
                        <a href="../homework1/index.html">
                            <div className="top-footer-1-logo"> <img src="./img/lef-logo.svg" alt="Левое лого" />
                                <h2 className="BRAN">BRAN<span className="D">D</span> </h2>
                            </div>
                        </a>
                        <p className="top-footer-1-text">Objectively transition extensive data rather than cross functional
                            solutions.
                            Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly
                            syndicate
                            an expanded array of processes and cross-unit partnerships. <br /> <br />

                            Efficiently plagiarize 24/365 action items and focused infomediaries.
                            Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
                    </div>
                    <div className="top-footer-2">
                        <h2 className="top-footer-h2">COMPANY</h2>
                        <a href="./index.html" className="top-footer-a">Home</a>
                        <a href="" className="top-footer-a">Shop</a>
                        <a href="" className="top-footer-a">About</a>
                        <a href="" className="top-footer-a">How It Works</a>
                        <a href="" className="top-footer-a">Contact</a>
                    </div>
                    <div className="top-footer-3">
                        <h2 className="top-footer-h2">INFORMATION</h2>
                        <a href="./index.html" className="top-footer-a">Tearms & Condition </a>
                        <a href="" className="top-footer-a">Privacy Policy</a>
                        <a href="" className="top-footer-a"> How to Buy</a>
                        <a href="" className="top-footer-a">How to Sell</a>
                        <a href="" className="top-footer-a">Promotion</a>
                    </div>
                    <div className="top-footer-4">
                        <h2 className="top-footer-h2">SHOP CATEGORY</h2>
                        <a href="./index.html" className="top-footer-a">Men </a>
                        <a href="" className="top-footer-a"> Women</a>
                        <a href="" className="top-footer-a"> Child</a>
                        <a href="" className="top-footer-a">Apparel</a>
                        <a href="" className="top-footer-a">Brows All</a>
                    </div>
                </div>
            </nav>
            <footer>
                <div className="footer">
                    <p className="footer_left">&copy;&nbsp;2022 Brand All Rights Reserved.</p>
                    <div className="div_icons">
                        <a className="footer_icons" href="https://www.facebook.com/?locale=ru_RU">
                            <Footer1 />
                        </a>
                        <a className="footer_icons" href="https://twitter.com/?lang=ru">
                            <Footer2 />
                        </a>
                        <a className="footer_icons" href="https://ru.linkedin.com/">
                            <Footer3 />
                        </a>
                        <a className="footer_icons" href="https://ru.pinterest.com/">
                            <Footer4 />
                        </a>
                        <a className="footer_icons"
                            href="https://www.google.com/webhp?hl=ru&sa=X&sqi=2&pjf=1&ved=0ahUKEwiIrYi1gNCEAxVPJBAIHWRSCTIQPAgJ">
                            <Footer5 />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default SinglePage;

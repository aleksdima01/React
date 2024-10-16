import React from 'react'
import "./checkout.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Cart } from "../../svg/cart.svg"
import { ReactComponent as FreeDelivery } from "../../svg/free_delivery.svg"
import { ReactComponent as Sales } from "../../svg/sales.svg"
import { ReactComponent as Quality } from "../../svg/quality.svg"
import { ReactComponent as SubscrInfo } from "../../svg/subscr_info.svg"
import { ReactComponent as Footer1 } from "../../svg/footer1.svg"
import { ReactComponent as Footer2 } from "../../svg/footer2.svg"
import { ReactComponent as Footer3 } from "../../svg/footer3.svg"
import { ReactComponent as Footer4 } from "../../svg/footer4.svg"
import { ReactComponent as Footer5 } from "../../svg/footer5.svg"

const Checkout = () => {
    return (
        <div>
            <header>
                <div className="header">
                    <div className="left-header-block">
                        <a className="header-logo" href="../homework1/index.html">
                            <img src="/img/lef-logo.svg" alt="Левое лого" />
                            <p className="BRAN">BRAN<span className="D">D</span> </p>
                        </a>
                        <div className="browse">
                            <div className="top-menu">
                                <ul className="top-menu__ul">
                                    <li className="top-menu__li">
                                        <label for="psbtn25" className="top-menu__link">
                                            Browse
                                            <FontAwesomeIcon icon={faCaretDown} style={{ color: "#838383", marginLeft: "8px", fontSize: "14px", marginTop: "3px" }} />
                                        </label>
                                        <input type="checkbox" id="psbtn25" />
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
                                        <img src="/img/cart-menu-man.png" alt="cart-menu-man" />
                                    </a>
                                    <a href="../homework2/single-page.html" className="cart-menu__menu-item__text-a">
                                        <div className="cart-menu__menu-item__text">
                                            <h3 className="cart-menu__menu-item__h3">Rebox Zane</h3>
                                            <p>
                                                <i className="fa fa-star" style={{
                                                    color: "#e4af48", fontSize: " 12px", lineHeight: " 1.2",
                                                    fontWeight: " 400", textTransform: "uppercase"
                                                }}></i>
                                                <i className="fa fa-star" style={{
                                                    color: "#e4af48", fontSize: " 12px", lineHeight: " 1.2",
                                                    fontWeight: " 400", textTransform: "uppercase"
                                                }}></i>
                                                <i className="fa fa-star" style={{
                                                    color: "#e4af48", fontSize: " 12px", lineHeight: " 1.2",
                                                    fontWeight: " 400", textTransform: "uppercase"
                                                }}></i>
                                                <i className="fa fa-star" style={{
                                                    color: "#e4af48", fontSize: " 12px", lineHeight: " 1.2",
                                                    fontWeight: " 400", textTransform: "uppercase"
                                                }}></i>
                                                <i className="fa fa-star" style={{
                                                    color: "#e4af48", fontSize: " 12px", lineHeight: " 1.2",
                                                    fontWeight: " 400", textTransform: "uppercase"
                                                }}></i>
                                            </p>
                                            <p className="cart-menu__menu-item__p">1 <span>x</span> $250</p>
                                        </div>
                                    </a>
                                    <a href="#"> <i className="fa fa-times-circle"
                                        style={{ color: "#c0c0c0", fontSize: "16px", fontWeight: "400", lineHeight: "1.2", marginLeft: "55px" }}></i></a>
                                </div>
                                <div className="cart-menu__menu-item__border"></div>
                                <div className="cart-menu__menu-item">
                                    <a href="../homework2/single-page.html" className="cart-menu__menu-item__img">
                                        <img src="/img/cart_menu_woman.png" alt="cart-menu-man" />
                                    </a>
                                    <a href="../homework2/single-page.html" className="cart-menu__menu-item__text-a">
                                        <div className="cart-menu__menu-item__text">
                                            <h3 className="cart-menu__menu-item__h3">Rebox Zane</h3>
                                            <p>
                                                <i className="fa fa-star" style={{
                                                    color: "#e4af48", fontSize: " 12px", lineHeight: " 1.2",
                                                    fontWeight: " 400", textTransform: "uppercase"
                                                }}></i>
                                                <i className="fa fa-star" style={{
                                                    color: "#e4af48", fontSize: " 12px", lineHeight: " 1.2",
                                                    fontWeight: " 400", textTransform: "uppercase"
                                                }}></i>
                                                <i className="fa fa-star" style={{
                                                    color: "#e4af48", fontSize: " 12px", lineHeight: " 1.2",
                                                    fontWeight: " 400", textTransform: "uppercase"
                                                }}></i>
                                                <i className="fa fa-star" style={{
                                                    color: "#e4af48", fontSize: " 12px", lineHeight: " 1.2",
                                                    fontWeight: " 400", textTransform: "uppercase"
                                                }}></i>
                                                <i className="fa fa-star" style={{
                                                    color: "#e4af48", fontSize: " 12px", lineHeight: " 1.2",
                                                    fontWeight: " 400", textTransform: "uppercase"
                                                }}></i>
                                            </p>
                                            <p className="cart-menu__menu-item__p">1 <span>x</span> $250</p>
                                        </div>
                                    </a>
                                    <a href="#"> <i className="fa fa-times-circle"
                                        style={{ color: "#c0c0c0", fontSize: "16px", fontWeight: "400", lineHeight: "1.2", marginLeft: "55px" }}>
                                    </i></a>
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
            </header >
            <nav>
                <div className="header_bottom">
                    <ul className="menu">
                        <li className="menu-list"><a className="menu-link" href="#">Home</a>
                            <div className="mega-box">
                                <div className="menu-item">
                                    <h3 className="menu-headding">Home</h3>
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
                                    <h3 className="menu-headding">Home</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item menu-item-in-item">
                                        <h3 className="menu-headding">Home</h3>
                                        <a href="#" className="mega-link">Dresses</a>
                                        <a href="#" className="mega-link">Tops</a>
                                        <a href="#" className="mega-link">Sweaters/Knits</a>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h3 className="menu-headding">Home</h3>
                                    <a href="#" className="mega-link">Dresses</a>
                                    <a href="#" className="mega-link">Tops</a>
                                    <a href="#" className="mega-link">Sweaters/Knits</a>
                                    <a href="#" className="mega-link">Jackets/Coats</a>
                                    <div className="menu-item-img-container">
                                        <img className="menu-item_img" src="/img/man_in_glasses.png" alt="man in glasses" />
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
                                        <img className="menu-item_img" src="/img/man_in_glasses.png" alt="man in glasses" />
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
                                        <img className="menu-item_img" src="/img/man_in_glasses.png" alt="man in glasses" />
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
                                        <img className="menu-item_img" src="/img/man_in_glasses.png" alt="man in glasses" />
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
                                        <img className="menu-item_img" src="/img/man_in_glasses.png" alt="man in glasses" />
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
                                        <img className="menu-item_img" src="/img/man_in_glasses.png" alt="man in glasses" />
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
                                        <img className="menu-item_img" src="/img/man_in_glasses.png" alt="man in glasses" />
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
            <nav className="left-menu-nav">
                <div className="left-menu">
                    <ul className="left-menu__ul">
                        <li className="left-menu__li">
                            <label for="psbtn1" className="left-menu__link">01.&nbsp;&nbsp;Shipping Adress</label>
                            <input type="checkbox" id="psbtn1" />
                            <div className="left-menu__box">
                                <div className="left-menu__box__item">
                                    <h2 className="left-menu__box__item__h2">Check as a guest or register</h2>
                                    <p className="left-menu__box__item__p">Register with us for future convenience</p>
                                    <p className="left-menu__box__item__check">
                                        <input className="left-menu__box__item__input" type="radio" name="check" id="checkout"
                                            checked />
                                        <label className="left-menu__box__item__checkout" for="checkout">checkout as guest</label>
                                    </p>
                                    <p className="left-menu__box__item__check left-menu__box__item__check_pb">
                                        <input className="left-menu__box__item__input" type="radio" name="check" id="register" />
                                        <label className="left-menu__box__item__checkout" for="register">register</label>
                                    </p>
                                    <h2 className="left-menu__box__item__h2">register and save time!</h2>
                                    <p className="left-menu__box__item__p">Register with us for future convenience</p>
                                    <a className="left-menu__box__item__p left-menu__box__item__p_pad left-menu__box__item__a_hov">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} style={{ color: "#b3b2b2", fontSize: "13px", paddingRight: "4px" }} />Fast
                                        and easy checkout</a>
                                    <a className="left-menu__box__item__p left-menu__box__item__a_hov">

                                        <FontAwesomeIcon icon={faAngleDoubleRight} style={{ color: "#b3b2b2", fontSize: "13px", paddingRight: "4px" }} />Easy access to your
                                        order history and
                                        status
                                    </a>
                                    <a className="left-menu__box__item__a" href="#">Continue</a>
                                </div>
                                <div className="left-menu__box__item">
                                    <h2 className="left-menu__box__item__h2">Already registed?</h2>
                                    <p className="left-menu__box__item__p left-menu__box__item__p_pad27">Please log in below</p>
                                    <h2 className="left-menu__box__item__h2 left-menu__box__item__h2_12px">EMAIL ADDRESS <span
                                        className="required_field">*</span></h2>
                                    <input className="left-menu__box__item__email" type="email" />
                                    <h2 className="left-menu__box__item__h2 left-menu__box__item__h2_12px">PASSWORD <span
                                        className="required_field">*</span></h2>
                                    <input className="left-menu__box__item__email" type="password" />
                                    <p className="left-menu__box__item__required">* Required Fileds</p>
                                    <div className="left-menu__box__item__forgot__passwd">
                                        <a className="left-menu__box__item__a" href="#">Log in</a>
                                        <a className="left-menu__box__item__forgot__passwd__a" href="#">Forgot Password </a>
                                    </div>
                                </div>
                            </div>
                            <div className="border"></div>
                        </li>
                        <li className="left-menu__li">
                            <label for="psbtn2" className="left-menu__link">02.&nbsp;&nbsp;BILLING INFORMATION
                            </label>
                            <input type="checkbox" id="psbtn2" />
                            <div className="left-menu__box">
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
                        <li className="left-menu__li">
                            <label for="psbtn3" className="left-menu__link"> 03.&nbsp;&nbsp;SHIPPING INFORMATION</label>
                            <input type="checkbox" id="psbtn3" />
                            <div className="left-menu__box">
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
                        <li className="left-menu__li">
                            <label for="psbtn4" className="left-menu__link"> 04.&nbsp;&nbsp;SHIPPING METHOD</label>
                            <input type="checkbox" id="psbtn4" />
                            <div className="left-menu__box">
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
                        <li className="left-menu__li">
                            <label for="psbtn5" className="left-menu__link">05.&nbsp;&nbsp;PAYMENT METHOD</label>
                            <input type="checkbox" id="psbtn5" />
                            <div className="left-menu__box">
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
                        <li className="left-menu__li">
                            <label for="psbtn6" className="left-menu__link">06.&nbsp;&nbsp;ORDER REVIEW</label>
                            <input type="checkbox" id="psbtn6" />
                            <div className="left-menu__box">
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
            <nav>
                <div className="top-footer">
                    <div className="top-footer-1">
                        <a className="top-footer-1-logo" href="../homework1/index.html"><img src="/img/lef-logo.svg"
                            alt="Левое лого" />
                            <h2 className="BRAN">BRAN<span className="D">D</span> </h2>
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
        </div >
    )
}

export default Checkout;

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Cartsvg } from "../../svg/cart.svg"
import { ReactComponent as FreeDelivery } from "../../svg/free_delivery.svg"
import { ReactComponent as Sales } from "../../svg/sales.svg"
import { ReactComponent as Quality } from "../../svg/quality.svg"
import { ReactComponent as SubscrInfo } from "../../svg/subscr_info.svg"
import { ReactComponent as Footer1 } from "../../svg/footer1.svg"
import { ReactComponent as Footer2 } from "../../svg/footer2.svg"
import { ReactComponent as Footer3 } from "../../svg/footer3.svg"
import { ReactComponent as Footer4 } from "../../svg/footer4.svg"
import { ReactComponent as Footer5 } from "../../svg/footer5.svg"

const Cart = () => {
    return (
        <div>
            <header>
                <div class="header">
                    <div class="left-header-block">
                        <a class="header-logo" href="../homework1/index.html">
                            <img src="./img/lef-logo.svg" alt="Левое лого" />
                            <p class="BRAN">BRAN<span class="D">D</span> </p>
                        </a>
                        <div class="browse">
                            <div class="top-menu">
                                <ul class="top-menu__ul">
                                    <li class="top-menu__li">
                                        <label for="psbtn23" class="top-menu__link">
                                            Browse <FontAwesomeIcon icon={faCaretDown} style={{ color: "#838383", marginLeft: "8px", fontSize: "14px", marginTop: "3px" }} />
                                        </label>
                                        <input type="checkbox" id="psbtn23" />
                                        <div class="top-menu__box">
                                            <h3 class="top-menu__box__heading">Women</h3>
                                            <a href="#" class="top-menu__box__link">Dresses</a>
                                            <a href="#" class="top-menu__box__link">Tops</a>
                                            <a href="#" class="top-menu__box__link">Sweaters/Knits</a>
                                            <a href="#" class="top-menu__box__link">Jackets/Coats</a>
                                            <a href="#" class="top-menu__box__link">Blazers</a>
                                            <a href="#" class="top-menu__box__link">Denim</a>
                                            <a href="#" class="top-menu__box__link">Leggings/Pants</a>
                                            <a href="#" class="top-menu__box__link">Skirts/Shorts</a>
                                            <a href="#" class="top-menu__box__link">Accessories</a>
                                            <h3 class="top-menu__box__heading">Man</h3>
                                            <a href="#" class="top-menu__box__link">Tees/Tank tops</a>
                                            <a href="#" class="top-menu__box__link">Shirts/Polos</a>
                                            <a href="#" class="top-menu__box__link">Sweaters</a>
                                            <a href="#" class="top-menu__box__link">Sweatshirts/Hoodies</a>
                                            <a href="#" class="top-menu__box__link">Blazers</a>
                                            <a href="#" class="top-menu__box__link">Jackets/vests</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <form>
                                <input class="search_field" type="search" placeholder="Search for Item" />
                                <button className="search_button" type="submit"><i><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#a4a4a4' }} /></i>
                                </button>
                            </form>
                        </div>

                    </div>
                    <div class="right-header-block">
                        <li class="cart-menu">
                            <a href="../homework5/cart.html">
                                <Cartsvg />
                            </a>
                            <div class="cart-menu__mega-box">
                                <div class="cart-menu__menu-item">
                                    <a href="../homework2/single-page.html" class="cart-menu__menu-item__img">
                                        <img src="./img/cart-menu-man.png" alt="cart-menu-man" />
                                    </a>
                                    <a href="../homework2/single-page.html" class="cart-menu__menu-item__text-a">
                                        <div class="cart-menu__menu-item__text">
                                            <h3 class="cart-menu__menu-item__h3">Rebox Zane</h3>
                                            <p>
                                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                            </p>
                                            <p class="cart-menu__menu-item__p">1 <span>x</span> $250</p>
                                        </div>
                                    </a>
                                    <a href="#"> <i class="fa fa-times-circle"
                                        style="color:#c0c0c0;font-size: 16px;font-weight: 400;line-height: 1.2;margin-left: 55px;"></i></a>
                                </div>
                                <div class="cart-menu__menu-item__border"></div>
                                <div class="cart-menu__menu-item">
                                    <a href="../homework2/single-page.html" class="cart-menu__menu-item__img">
                                        <img src="./img/cart_menu_woman.png" alt="cart-menu-man" />
                                    </a>
                                    <a href="../homework2/single-page.html" class="cart-menu__menu-item__text-a">
                                        <div class="cart-menu__menu-item__text">
                                            <h3 class="cart-menu__menu-item__h3">Rebox Zane</h3>
                                            <p>
                                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                                font-weight: 400;text-transform: uppercase;"></i>
                                            </p>
                                            <p class="cart-menu__menu-item__p">1 <span>x</span> $250</p>
                                        </div>
                                    </a>
                                    <a href="#"> <i class="fa fa-times-circle"
                                        style="color:#c0c0c0;font-size: 16px;font-weight: 400;line-height: 1.2;margin-left: 55px;"></i></a>
                                </div>
                                <div class="cart-menu__menu-item__border"></div>
                                <h2 class="cart-menu__mega-box__h2">TOTAL <span>$500.00</span></h2>
                                <a href="../homework4/chekout.html" class="cart-menu__mega-box__a">CHECKOUT</a>
                                <a href="../homework5/cart.html" class=" cart-menu__mega-box__a cart-menu__mega-box__a_cart">Go
                                    to cart</a>
                            </div>
                        </li>
                        <button class="button-right" type="button">My Account <i class="fa fa-caret-down"
                            style="color: #ffffff;;font-size: 14px;"></i></button>
                    </div>
                </div>
            </header>
            <nav>
                <div class="header_bottom">
                    <ul class="menu">
                        <li class="menu-list"><a class="menu-link" href="../homework1/index.html">Home</a>
                            <div class="mega-box">
                                <div class="menu-item">
                                    <h3 class="menu-headding">Home</h3>
                                    <a href="#" class="mega-link">Dresses</a>
                                    <a href="#" class="mega-link">Tops</a>
                                    <a href="#" class="mega-link">Sweaters/Knits</a>
                                    <a href="#" class="mega-link">Jackets/Coats</a>
                                    <a href="#" class="mega-link">Blazers</a>
                                    <a href="#" class="mega-link">Denim</a>
                                    <a href="#" class="mega-link">Leggins/Pants</a>
                                    <a href="#" class="mega-link">Skirts/Shorts</a>
                                    <a href="#" class="mega-link">Accesories</a>
                                </div>
                                <div class="menu-item">
                                    <h3 class="menu-headding">Home</h3>
                                    <a href="#" class="mega-link">Dresses</a>
                                    <a href="#" class="mega-link">Tops</a>
                                    <a href="#" class="mega-link">Sweaters/Knits</a>
                                    <a href="#" class="mega-link">Jackets/Coats</a>
                                    <div class="menu-item menu-item-in-item">
                                        <h3 class="menu-headding">Home</h3>
                                        <a href="#" class="mega-link">Dresses</a>
                                        <a href="#" class="mega-link">Tops</a>
                                        <a href="#" class="mega-link">Sweaters/Knits</a>
                                    </div>
                                </div>
                                <div class="menu-item">
                                    <h3 class="menu-headding">Home</h3>
                                    <a href="#" class="mega-link">Dresses</a>
                                    <a href="#" class="mega-link">Tops</a>
                                    <a href="#" class="mega-link">Sweaters/Knits</a>
                                    <a href="#" class="mega-link">Jackets/Coats</a>
                                    <div class="menu-item-img-container">
                                        <img class="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                                        <div class="menu-item-img-container-text">Super<br/>sale!</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu-list"><a class="menu-link" href="#">Man</a>
                        <div class="mega-box">
                            <div class="menu-item">
                                <h3 class="menu-headding">Man</h3>
                                <a href="#" class="mega-link">Dresses</a>
                                <a href="#" class="mega-link">Tops</a>
                                <a href="#" class="mega-link">Sweaters/Knits</a>
                                <a href="#" class="mega-link">Jackets/Coats</a>
                                <a href="#" class="mega-link">Blazers</a>
                                <a href="#" class="mega-link">Denim</a>
                                <a href="#" class="mega-link">Leggins/Pants</a>
                                <a href="#" class="mega-link">Skirts/Shorts</a>
                                <a href="#" class="mega-link">Accesories</a>
                            </div>
                            <div class="menu-item">
                                <h3 class="menu-headding">Man</h3>
                                <a href="#" class="mega-link">Dresses</a>
                                <a href="#" class="mega-link">Tops</a>
                                <a href="#" class="mega-link">Sweaters/Knits</a>
                                <a href="#" class="mega-link">Jackets/Coats</a>
                                <div class="menu-item menu-item-in-item">
                                    <h3 class="menu-headding">Man</h3>
                                    <a href="#" class="mega-link">Dresses</a>
                                    <a href="#" class="mega-link">Tops</a>
                                    <a href="#" class="mega-link">Sweaters/Knits</a>
                                </div>
                            </div>
                            <div class="menu-item">
                                <h3 class="menu-headding">Man</h3>
                                <a href="#" class="mega-link">Dresses</a>
                                <a href="#" class="mega-link">Tops</a>
                                <a href="#" class="mega-link">Sweaters/Knits</a>
                                <a href="#" class="mega-link">Jackets/Coats</a>
                                <div class="menu-item-img-container">
                                    <img class="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                                    <div class="menu-item-img-container-text">Super<br/>sale!</div>
                            </div>
                        </div>
                </div>
            </li>
            <li class="menu-list"><a class="menu-link" href="#">Women</a>
                <div class="mega-box">
                    <div class="menu-item">
                        <h3 class="menu-headding">Women</h3>
                        <a href="#" class="mega-link">Dresses</a>
                        <a href="#" class="mega-link">Tops</a>
                        <a href="#" class="mega-link">Sweaters/Knits</a>
                        <a href="#" class="mega-link">Jackets/Coats</a>
                        <a href="#" class="mega-link">Blazers</a>
                        <a href="#" class="mega-link">Denim</a>
                        <a href="#" class="mega-link">Leggins/Pants</a>
                        <a href="#" class="mega-link">Skirts/Shorts</a>
                        <a href="#" class="mega-link">Accesories</a>
                    </div>
                    <div class="menu-item">
                        <h3 class="menu-headding">Women</h3>
                        <a href="#" class="mega-link">Dresses</a>
                        <a href="#" class="mega-link">Tops</a>
                        <a href="#" class="mega-link">Sweaters/Knits</a>
                        <a href="#" class="mega-link">Jackets/Coats</a>
                        <div class="menu-item menu-item-in-item">
                            <h3 class="menu-headding">Women</h3>
                            <a href="#" class="mega-link">Dresses</a>
                            <a href="#" class="mega-link">Tops</a>
                            <a href="#" class="mega-link">Sweaters/Knits</a>
                        </div>
                    </div>
                    <div class="menu-item">
                        <h3 class="menu-headding">Women</h3>
                        <a href="#" class="mega-link">Dresses</a>
                        <a href="#" class="mega-link">Tops</a>
                        <a href="#" class="mega-link">Sweaters/Knits</a>
                        <a href="#" class="mega-link">Jackets/Coats</a>
                        <div class="menu-item-img-container">
                            <img class="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                            <div class="menu-item-img-container-text">Super<br/>sale!</div>
                    </div>
                </div>
        </div>
                        </li >
    <li class="menu-list"><a class="menu-link" href="#">Kids</a>
        <div class="mega-box">
            <div class="menu-item">
                <h3 class="menu-headding">Kids</h3>
                <a href="#" class="mega-link">Dresses</a>
                <a href="#" class="mega-link">Tops</a>
                <a href="#" class="mega-link">Sweaters/Knits</a>
                <a href="#" class="mega-link">Jackets/Coats</a>
                <a href="#" class="mega-link">Blazers</a>
                <a href="#" class="mega-link">Denim</a>
                <a href="#" class="mega-link">Leggins/Pants</a>
                <a href="#" class="mega-link">Skirts/Shorts</a>
                <a href="#" class="mega-link">Accesories</a>
            </div>
            <div class="menu-item">
                <h3 class="menu-headding">Kids</h3>
                <a href="#" class="mega-link">Dresses</a>
                <a href="#" class="mega-link">Tops</a>
                <a href="#" class="mega-link">Sweaters/Knits</a>
                <a href="#" class="mega-link">Jackets/Coats</a>
                <div class="menu-item menu-item-in-item">
                    <h3 class="menu-headding">Kids</h3>
                    <a href="#" class="mega-link">Dresses</a>
                    <a href="#" class="mega-link">Tops</a>
                    <a href="#" class="mega-link">Sweaters/Knits</a>
                </div>
            </div>
            <div class="menu-item">
                <h3 class="menu-headding">Kids</h3>
                <a href="#" class="mega-link">Dresses</a>
                <a href="#" class="mega-link">Tops</a>
                <a href="#" class="mega-link">Sweaters/Knits</a>
                <a href="#" class="mega-link">Jackets/Coats</a>
                <div class="menu-item-img-container">
                    <img class="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                    <div class="menu-item-img-container-text">Super<br/>sale!</div>
            </div>
        </div>
    </div>
                        </li >
    <li class="menu-list last"><a class="menu-link" href="#">Accessories</a>
        <div class="mega-box">
            <div class="menu-item">
                <h3 class="menu-headding">Accessories</h3>
                <a href="#" class="mega-link">Dresses</a>
                <a href="#" class="mega-link">Tops</a>
                <a href="#" class="mega-link">Sweaters/Knits</a>
                <a href="#" class="mega-link">Jackets/Coats</a>
                <a href="#" class="mega-link">Blazers</a>
                <a href="#" class="mega-link">Denim</a>
                <a href="#" class="mega-link">Leggins/Pants</a>
                <a href="#" class="mega-link">Skirts/Shorts</a>
                <a href="#" class="mega-link">Accesories</a>
            </div>
            <div class="menu-item">
                <h3 class="menu-headding">Accessories</h3>
                <a href="#" class="mega-link">Dresses</a>
                <a href="#" class="mega-link">Tops</a>
                <a href="#" class="mega-link">Sweaters/Knits</a>
                <a href="#" class="mega-link">Jackets/Coats</a>
                <div class="menu-item menu-item-in-item">
                    <h3 class="menu-headding">Accessories</h3>
                    <a href="#" class="mega-link">Dresses</a>
                    <a href="#" class="mega-link">Tops</a>
                    <a href="#" class="mega-link">Sweaters/Knits</a>
                </div>
            </div>
            <div class="menu-item">
                <h3 class="menu-headding">Accessories</h3>
                <a href="#" class="mega-link">Dresses</a>
                <a href="#" class="mega-link">Tops</a>
                <a href="#" class="mega-link">Sweaters/Knits</a>
                <a href="#" class="mega-link">Jackets/Coats</a>
                <div class="menu-item-img-container">
                    <img class="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                    <div class="menu-item-img-container-text">Super<br/>sale!</div>
            </div>
        </div>
    </div>
                        </li >
    <li class="menu-list last"><a class="menu-link" href="#">Featured</a>
        <div class="mega-box">
            <div class="menu-item">
                <h3 class="menu-headding">Featured</h3>
                <a href="#" class="mega-link">Dresses</a>
                <a href="#" class="mega-link">Tops</a>
                <a href="#" class="mega-link">Sweaters/Knits</a>
                <a href="#" class="mega-link">Jackets/Coats</a>
                <a href="#" class="mega-link">Blazers</a>
                <a href="#" class="mega-link">Denim</a>
                <a href="#" class="mega-link">Leggins/Pants</a>
                <a href="#" class="mega-link">Skirts/Shorts</a>
                <a href="#" class="mega-link">Accesories</a>
            </div>
            <div class="menu-item">
                <h3 class="menu-headding">Featured</h3>
                <a href="#" class="mega-link">Dresses</a>
                <a href="#" class="mega-link">Tops</a>
                <a href="#" class="mega-link">Sweaters/Knits</a>
                <a href="#" class="mega-link">Jackets/Coats</a>
                <div class="menu-item menu-item-in-item">
                    <h3 class="menu-headding">Featured</h3>
                    <a href="#" class="mega-link">Dresses</a>
                    <a href="#" class="mega-link">Tops</a>
                    <a href="#" class="mega-link">Sweaters/Knits</a>
                </div>
            </div>
            <div class="menu-item">
                <h3 class="menu-headding">Featured</h3>
                <a href="#" class="mega-link">Dresses</a>
                <a href="#" class="mega-link">Tops</a>
                <a href="#" class="mega-link">Sweaters/Knits</a>
                <a href="#" class="mega-link">Jackets/Coats</a>
                <div class="menu-item-img-container">
                    <img class="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                    <div class="menu-item-img-container-text">Super<br/>sale!</div>
            </div>
        </div>
    </div>
                        </li >
    <li class="menu-list last"><a class="menu-link" href="#">Hot Deals</a>
        <div class="mega-box">
            <div class="menu-item">
                <h3 class="menu-headding">Hot Deals</h3>
                <a href="#" class="mega-link">Dresses</a>
                <a href="#" class="mega-link">Tops</a>
                <a href="#" class="mega-link">Sweaters/Knits</a>
                <a href="#" class="mega-link">Jackets/Coats</a>
                <a href="#" class="mega-link">Blazers</a>
                <a href="#" class="mega-link">Denim</a>
                <a href="#" class="mega-link">Leggins/Pants</a>
                <a href="#" class="mega-link">Skirts/Shorts</a>
                <a href="#" class="mega-link">Accesories</a>
            </div>
            <div class="menu-item">
                <h3 class="menu-headding">Hot Deals</h3>
                <a href="#" class="mega-link">Dresses</a>
                <a href="#" class="mega-link">Tops</a>
                <a href="#" class="mega-link">Sweaters/Knits</a>
                <a href="#" class="mega-link">Jackets/Coats</a>
                <div class="menu-item menu-item-in-item">
                    <h3 class="menu-headding">Hot Deals</h3>
                    <a href="#" class="mega-link">Dresses</a>
                    <a href="#" class="mega-link">Tops</a>
                    <a href="#" class="mega-link">Sweaters/Knits</a>
                </div>
            </div>
            <div class="menu-item">
                <h3 class="menu-headding">Hot Deals</h3>
                <a href="#" class="mega-link">Dresses</a>
                <a href="#" class="mega-link">Tops</a>
                <a href="#" class="mega-link">Sweaters/Knits</a>
                <a href="#" class="mega-link">Jackets/Coats</a>
                <div class="menu-item-img-container">
                    <img class="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses"/>
                    <div class="menu-item-img-container-text">Super<br/>sale!</div>
            </div>
        </div>
    </div>
                        </li >
                    </ul >
                </div >
            </nav>
            <nav class="new-arrivals">
                <a href="#" class="new-arrivals__link">New Arrivals</a>
                <ul class="ul-refs">
                    <li class="ul-refs__li"><a class="ul-refs__a" href="../homework1/index.html">home</a></li>
                    <li class="ul-refs__li"><a class="ul-refs__a" href="../homework3/product.html">man</a></li>
                    <li class="ul-refs__li"><a class="ul-refs__a" href="../homework3/product.html">New Arrivals</a></li>
                </ul>
            </nav>
            <section class="cart-products">
                <div class="cart-products__grid">
                    <h2 class="cart-products__h2 cart-products__h2_justify">Product Details</h2>
                    <h2 class="cart-products__h2">unite Price</h2>
                    <h2 class="cart-products__h2">Quantity</h2>
                    <h2 class="cart-products__h2">shipping</h2>
                    <h2 class="cart-products__h2">Subtotal</h2>
                    <h2 class="cart-products__h2">ACTION</h2>
                    <div class="cart-products__border"></div>
                    <div class="cart-products__cards">
                        <a href="../homework2/single-page.html">
                            <img src="./img/man-1.png" alt="man1"/>
                                <div class="cart-products__cards__text">
                                    <a class="cart-products__cards__a" href="../homework2/single-page.html">Mango People T-shirt</a>
                                    <p class="cart-products__cards__p">Color:<span class="cart-products__cards__span">Red</span></p>
                                    <p class="cart-products__cards__p">Size:<span class="cart-products__cards__span">Xll</span></p>
                                </a>
                            </div>
                    </div>
                    <p class="cart-products__p">$150</p>
                    <input class="cart-products__input" type="number" min="1" placeholder="2" />
                    <p class="cart-products__p">FREE</p>
                    <p class="cart-products__p">$300</p>
                    <a href="#"> <i class="fa fa-times-circle"
                        style="color:#c0c0c0;font-size: 16px;font-weight: 400;line-height: 1.2;"></i></a>
                    <div class="cart-products__border"></div>
                    <div class="cart-products__cards">
                        <a href="../homework2/single-page.html">
                            <img src="./img/man-2.png" alt="man2"/>
                                <div class="cart-products__cards__text">
                                    <a class="cart-products__cards__a" href="../homework2/single-page.html">Mango People T-shirt</a>
                                    <p class="cart-products__cards__p">Color:<span class="cart-products__cards__span">Red</span></p>
                                    <p class="cart-products__cards__p">Size:<span class="cart-products__cards__span">Xll</span></p>
                                </a>
                            </div>
                    </div>
                    <p class="cart-products__p">$150</p>
                    <input class="cart-products__input" type="number" min="1" placeholder="2">
                        <p class="cart-products__p">FREE</p>
                        <p class="cart-products__p">$300</p>
                        <a href="#"> <i class="fa fa-times-circle"
                            style="color:#c0c0c0;font-size: 16px;font-weight: 400;line-height: 1.2;"></i></a>
                        <div class="cart-products__border"></div>
                        <div class="cart-products__cards">
                            <a href="../homework2/single-page.html">
                                <img src="./img/man-3.png" alt="man3"/>
                                    <div class="cart-products__cards__text">
                                        <a class="cart-products__cards__a" href="../homework2/single-page.html">Mango People T-shirt</a>
                                        <p class="cart-products__cards__p">Color:<span class="cart-products__cards__span">Red</span></p>
                                        <p class="cart-products__cards__p">Size:<span class="cart-products__cards__span">Xll</span></p>
                                    </a>
                                </div>
                        </div>
                        <p class="cart-products__p">$150</p>
                        <input class="cart-products__input" type="number" min="1" placeholder="2">
                            <p class="cart-products__p">FREE</p>
                            <p class="cart-products__p">$300</p>
                            <a href="#"> <i class="fa fa-times-circle"
                                style="color:#c0c0c0;font-size: 16px;font-weight: 400;line-height: 1.2;"></i></a>
                            <div class="cart-products__border"></div>
                        </div>
                    </section >
                    <nav class="cart__buttons">
                        <a href="" class="cart__buttons__button">CLEAR SHOPPING CART</a>
                        <a href="" class="cart__buttons__button">CONTINUE SHOPPING</a>
                    </nav>
                    <section class="proceed__checkout">
                        <div class="proceed__checkout__adress">
                            <h2 class="proceed__checkout__adress__h2">Shipping Adress</h2>
                            <select class="proceed__checkout__adress__input proceed__checkout__adress__input__text" aria-label="select">
                                <option class="proceed__checkout__adress__input__text" selected>Bangladesh</option>
                                <option class="proceed__checkout__adress__input__text" value="1">Russia</option>
                                <option class="proceed__checkout__adress__input__text" value="2">China</option>
                                <option class="proceed__checkout__adress__input__text" value="3">Japan</option>
                                <option class="proceed__checkout__adress__input__text" value="4">USA</option>
                                <option class="proceed__checkout__adress__input__text" value="5">Europe</option>
                                <option class="proceed__checkout__adress__input__text" value="6">Africa</option>
                            </select>
                            <input class="proceed__checkout__adress__input proceed__checkout__adress__input__text" type="text"
                                placeholder="State">
                                <input class="proceed__checkout__adress__input proceed__checkout__adress__input__text" type="text"
                                    placeholder="Postcode / Zip">
                                    <a class="proceed__checkout__adress__button" href="#">get a quote</a>
                                </div>
                                <div class="proceed__checkout__discount">
                                    <h2 class="proceed__checkout__adress__h2">coupon discount</h2>
                                    <p class="proceed__checkout__discount__p">Enter your coupon code if you have one</p>
                                    <input class="proceed__checkout__adress__input proceed__checkout__adress__input__text" type="text"
                                        placeholder="State" />
                                    <a class="proceed__checkout__adress__button proceed__checkout__discount__button" href="#">Apply coupone</a>
                                </div>
                                <div class="proceed__checkout__total">
                                    <p class="proceed__checkout__total__p">Sub total &nbsp;&nbsp; $900</p>
                                    <h2 class="proceed__checkout__total__h2">Grand total &nbsp;&nbsp; <span>$900</span></h2>
                                    <div class="proceed__checkout__total__line"></div>
                                    <a href="../homework4/chekout.html" class="proceed__checkout__total__a">proceed to checkout</a>
                                </div>
                            </section>
                            <div class="sales">
                                <div class="free_delivery">
                                    <FreeDelivery />
                                    <h2 class="sales_text_h2">Free Delivery</h2>
                                    <p class="sales_text_p">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion
                                        with
                                        extensive models.</p>
                                </div>
                                <div class="free_delivery">
                                    <Sales />
                                    <h2 class="sales_text_h2">Sales &amp;&nbsp;discounts</h2>
                                    <p class="sales_text_p">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion
                                        with
                                        extensive models.</p>
                                </div>
                                <div class="free_delivery">
                                    <Quality />
                                    <h2 class="sales_text_h2">Quality assurance</h2>
                                    <p class="sales_text_p">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion
                                        with
                                        extensive models.</p>
                                </div>
                            </div>

                            <div class="subscribe__div">
                                <aside>
                                    <div class="subscribe_info">
                                        <div class="for_svg">
                                            <SubscrInfo />
                                        </div>
                                        <div class="subscribe_info_text">
                                            <h2 class="Vestibulum ">&laquo;“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                                                a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”&raquo;</h2>
                                            <h2 class="bin_burh">Bin Burhan</h2>
                                            <p class="dhaka">Dhaka, Bd</p>
                                            <div class="subscribe_info__photo-choose">
                                                <a href="#" class="subscribe_info__photo-choose_a"></a>
                                                <a href="#" class="subscribe_info__photo-choose_a"></a>
                                                <a href="#" class="subscribe_info__photo-choose_a"></a>
                                            </div>
                                        </div>

                                    </div>
                                </aside>
                                <div class="whiteline"></div>
                                <form>
                                    <div class="subscribe">
                                        <h2 class="subcribe_text_top">SUBSCRIBE</h2>
                                        <p class="subcribe_text_bottom">FOR OUR NEWLETTER AND PROMOTION</p>
                                        <div class="div_for_input">
                                            <div class="div_for_input_left"><input class="input" type="email" placeholder="Enter Your Email"
                                                name="Email" />
                                            </div>
                                            <a class="button_input_right" href="">Subscribe</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <nav>
                                <div class="top-footer">
                                    <div class="top-footer-1">
                                        <a class="top-footer-1-logo" href="../homework1/index.html"><img src="./img/lef-logo.svg"
                                            alt="Левое лого" />
                                            <h2 class="BRAN">BRAN<span class="D">D</span> </h2>
                                        </a>


                                        <p class="top-footer-1-text">Objectively transition extensive data rather than cross functional
                                            solutions.
                                            Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly
                                            syndicate
                                            an expanded array of processes and cross-unit partnerships. <br/> <br/>

                                            Efficiently plagiarize 24/365 action items and focused infomediaries.
                                            Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
                                    </div>
                                    <div class="top-footer-2">
                                        <h2 class="top-footer-h2">COMPANY</h2>
                                        <a href="../homework1/index.html" class="top-footer-a">Home</a>
                                        <a href="" class="top-footer-a">Shop</a>
                                        <a href="" class="top-footer-a">About</a>
                                        <a href="" class="top-footer-a">How It Works</a>
                                        <a href="" class="top-footer-a">Contact</a>
                                    </div>
                                    <div class="top-footer-3">
                                        <h2 class="top-footer-h2">INFORMATION</h2>
                                        <a href="../homework1/index.html" class="top-footer-a">Tearms & Condition </a>
                                        <a href="" class="top-footer-a">Privacy Policy</a>
                                        <a href="" class="top-footer-a"> How to Buy</a>
                                        <a href="" class="top-footer-a">How to Sell</a>
                                        <a href="" class="top-footer-a">Promotion</a>
                                    </div>
                                    <div class="top-footer-4">
                                        <h2 class="top-footer-h2">SHOP CATEGORY</h2>
                                        <a href="../homework1/index.html" class="top-footer-a">Men </a>
                                        <a href="" class="top-footer-a"> Women</a>
                                        <a href="" class="top-footer-a"> Child</a>
                                        <a href="" class="top-footer-a">Apparel</a>
                                        <a href="" class="top-footer-a">Brows All</a>
                                    </div>
                                </div>
                            </nav >
    <footer>
        <div class="footer">
            <p class="footer_left">&copy;&nbsp;2022 Brand All Rights Reserved.</p>
            <div class="div_icons">
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

export default Cart;

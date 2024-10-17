import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CartSvg } from "../../svg/cart.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <header>
                <div className="header">
                    <div className="left-header-block">
                        <Link to={'/'}>
                            <div className="header-logo"> <img src="./img/lef-logo.svg" alt="Левое лого" />
                                <h2 className="BRAN">BRAN<span className="D">D</span> </h2>
                            </div>
                        </Link>
                        <div className="browse">
                            <div className="top-menu">
                                <ul className="top-menu__ul">
                                    <li className="top-menu__li">
                                        <label for="psbtn1" className="top-menu__link">
                                            Browse<FontAwesomeIcon icon={faCaretDown} style={{ color: "#838383", marginLeft: "8px", fontSize: "14px" }} />
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
                            <Link to={'/cart'}>
                                <CartSvg />
                            </Link>
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
                                <Link to={"/checkout"} className="cart-menu__mega-box__a">CHECKOUT</Link>
                                <Link to={"/cart"} className=" cart-menu__mega-box__a cart-menu__mega-box__a_cart">Go
                                    to cart</Link>
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
                        <li className="menu-list"><Link to={'/'} className="menu-link">Home</Link>
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
                                        <img className="menu-item_img" src="./img/man_in_glasses.png" alt="man in glasses" />
                                        <div className="menu-item-img-container-text">Super<br />sale!</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-list"><Link to={'/products'} className="menu-link">Man</Link>
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
                        <li className="menu-list"><Link to={'/products'} className="menu-link">Women</Link>
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
                        <li className="menu-list"><Link to={'/products'} className="menu-link">Kids</Link>
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
                        <li className="menu-list last"><Link to={'/products'} className="menu-link">Accessories</Link>
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
                        <li className="menu-list last"><Link to={'/products'} className="menu-link">Featured</Link>
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
                        <li className="menu-list last"><Link to={'/products'} className="menu-link">Hot Deals</Link>
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
        </div>
    )
}

export default Header

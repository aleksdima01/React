import React from 'react'
import "./product.scss"
import { ReactComponent as FreeDelivery } from "../../svg/free_delivery.svg"
import { ReactComponent as Sales } from "../../svg/sales.svg"
import { ReactComponent as Quality } from "../../svg/quality.svg"
import { ReactComponent as SubscrInfo } from "../../svg/subscr_info.svg"
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Product = () => {
    return (
        <div>
            <Header />
            <nav className="new-arrivals">
                <a href="#" className="new-arrivals__link">New Arrivals</a>
                <ul className="ul-refs">
                    <li className="ul-refs__li"><a className="ul-refs__a" href="../homework1/index.html">home</a></li>
                    <li className="ul-refs__li"><a className="ul-refs__a" href="#">man</a></li>
                    <li className="ul-refs__li"><a className="ul-refs__a" href="#">New Arrivals</a></li>
                </ul>
            </nav>
            <section className='central_section'>
                <nav className="left-menu-nav">
                    <div className="left-menu">
                        <ul className="left-menu__ul">
                            <li className="left-menu__li">
                                <label for="psbtn1" className="left-menu__link">Category</label>
                                <input type="checkbox" id="psbtn1" />
                                <div className="left-menu__box">
                                    <a href="#" className="left-menu__box__link">Accesories</a>
                                    <a href="#" className="left-menu__box__link">Bags</a>
                                    <a href="#" className="left-menu__box__link">Denim</a>
                                    <a href="#" className="left-menu__box__link">Hoodies & Sweatshirts</a>
                                    <a href="#" className="left-menu__box__link">Jackets & Coats</a>
                                    <a href="#" className="left-menu__box__link">Pants</a>
                                    <a href="#" className="left-menu__box__link">Polos</a>
                                    <a href="#" className="left-menu__box__link">Shirts</a>
                                    <a href="#" className="left-menu__box__link">Shoes</a>
                                    <a href="#" className="left-menu__box__link">Shorts</a>
                                    <a href="#" className="left-menu__box__link">Sweaters & Knits</a>
                                    <a href="#" className="left-menu__box__link">T-Shirts</a>
                                    <a href="#" className="left-menu__box__link">Tanks</a>
                                </div>
                            </li>
                            <li className="left-menu__li">
                                <label for="psbtn2" className="left-menu__link">Brand</label>
                                <input type="checkbox" id="psbtn2" />
                                <div className="left-menu__box">
                                    <a href="#" className="left-menu__box__link">Accesories</a>
                                    <a href="#" className="left-menu__box__link">Bags</a>
                                    <a href="#" className="left-menu__box__link">Denim</a>
                                    <a href="#" className="left-menu__box__link">Hoodies & Sweatshirts</a>
                                    <a href="#" className="left-menu__box__link">Jackets & Coats</a>
                                    <a href="#" className="left-menu__box__link">Pants</a>
                                    <a href="#" className="left-menu__box__link">Polos</a>
                                    <a href="#" className="left-menu__box__link">Shirts</a>
                                    <a href="#" className="left-menu__box__link">Shoes</a>
                                    <a href="#" className="left-menu__box__link">Shorts</a>
                                    <a href="#" className="left-menu__box__link">Sweaters & Knits</a>
                                </div>
                            </li>
                            <li className="left-menu__li">
                                <label for="psbtn3" className="left-menu__link">Designer</label>
                                <input type="checkbox" id="psbtn3" />
                                <div className="left-menu__box">
                                    <a href="#" className="left-menu__box__link">Accesories</a>
                                    <a href="#" className="left-menu__box__link">Bags</a>
                                    <a href="#" className="left-menu__box__link">Denim</a>
                                    <a href="#" className="left-menu__box__link">Hoodies & Sweatshirts</a>
                                    <a href="#" className="left-menu__box__link">Jackets & Coats</a>
                                    <a href="#" className="left-menu__box__link">Pants</a>
                                    <a href="#" className="left-menu__box__link">Polos</a>
                                    <a href="#" className="left-menu__box__link">Shirts</a>
                                    <a href="#" className="left-menu__box__link">Shoes</a>
                                    <a href="#" className="left-menu__box__link">Shorts</a>
                                    <a href="#" className="left-menu__box__link">Sweaters & Knits</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="bias-main-content">
                    <nav className="sort">
                        <div className="trending-now">
                            <h2 className="trending-now__h2">Trending-now</h2>
                            <ul className="trending-now__ul">
                                <li className="trending-now__li"><a className="trending-now__a" href="#">Bohemian</a></li>
                                <li className="trending-now__li"><a className="trending-now__a" href="#">Floral</a></li>
                                <li className="trending-now__li"><a className="trending-now__a" href="#">Lace</a></li>
                                <li className="trending-now__li"><a className="trending-now__a" href="#">Floral</a></li>
                                <li className="trending-now__li"><a className="trending-now__a" href="#">Lace</a></li>
                                <li className="trending-now__li"><a className="trending-now__a" href="#">Bohemian</a></li>
                            </ul>
                        </div>
                        <div className="size">
                            <h2 className="trending-now__h2">Size</h2>
                            <input className="size__check" type="checkbox" id="XXS" name="XXS" />
                            <label className="size__checkbox" for="XXS">XXS</label>
                            <input className="size__check" type="checkbox" id="XS" name="XS" />
                            <label className="size__checkbox" for="XS">XS</label>
                            <input className="size__check" type="checkbox" id="S" name="S" />
                            <label className="size__checkbox" for="S">S</label>
                            <input className="size__check" type="checkbox" id="M" name="M" />
                            <label className="size__checkbox" for="M">M</label>
                            <input className="size__check" type="checkbox" id="L" name="L" />
                            <label className="size__checkbox" for="L">L</label>
                            <input className="size__check" type="checkbox" id="XL" name="XL" />
                            <label className="size__checkbox" for="XL">XL</label>
                            <input className="size__check" type="checkbox" id="XXL" name="XXL" />
                            <label className="size__checkbox" for="XXL">XXL</label>
                        </div>
                        <div className="price">
                            <h2 className="trending-now__h2">Price</h2>
                            <input type="range" id="tempB" name="temp" list="values" />
                            <datalist id="values">
                                <option value="0" label="$52"></option>
                                <option value="100" label="$400"></option>
                            </datalist>
                        </div>
                    </nav>
                    <nav className="select">
                        <p className="sort-by">Sort By</p>
                        <select className="form-select" aria-label="Default select example">
                            <option className="value" selected>Name</option>
                            <option className="value" value="1">Price</option>
                            <option className="value" value="2">Popularity</option>
                            <option className="value" value="3">Novelty</option>
                        </select>
                        <p className="sort-by">Show</p>
                        <select className="form-select form-select_show" aria-label="Default select example">
                            <option className="value" value="0">06</option>
                            <option className="value" value="1" selected>09</option>
                            <option className="value" value="2">12</option>
                            <option className="value" value="3">15</option>
                            <option className="value" value="4">18</option>
                            <option className="value" value="5">21</option>
                        </select>
                    </nav>
                    <section className="cards">
                        <div className="cards-section">
                            <div className="item-box">
                                {/* <!-- <div className="item">
                                <a href="../homework2/single-page.html" className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src="img/1-card.png" alt="item"/>
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
                                    <div className="add__icons">
                                        <a href="33333" className="add add_size">
                                            <img src="img/arrows.png" alt="arrows" className="add-icons" />
                                        </a>
                                        <a href="444444" className="add add_size">
                                            <img src="img/heart.png" alt="heart" className="add-icons" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <a href="../homework2/single-page.html" className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src="img/2-card.png" alt="item" />
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
                                    <div className="add__icons">
                                        <a href="33333" className="add add_size">
                                            <img src="img/arrows.png" alt="arrows" className="add-icons" />
                                        </a>
                                        <a href="444444" className="add add_size">
                                            <img src="img/heart.png" alt="heart" className="add-icons" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <a href="../homework2/single-page.html" className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src="img/3-card.png" alt="item" />
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
                                    <div className="add__icons">
                                        <a href="33333" className="add add_size">
                                            <img src="img/arrows.png" alt="arrows" className="add-icons" />
                                        </a>
                                        <a href="444444" className="add add_size">
                                            <img src="img/heart.png" alt="heart" className="add-icons" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <a href="../homework2/single-page.html" className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src="img/4-card.png" alt="item" />
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
                                    <div className="add__icons">
                                        <a href="33333" className="add add_size">
                                            <img src="img/arrows.png" alt="arrows" className="add-icons" />
                                        </a>
                                        <a href="444444" className="add add_size">
                                            <img src="img/heart.png" alt="heart" className="add-icons" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <a href="../homework2/single-page.html" className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src="img/5-card.png" alt="item" />
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
                                    <div className="add__icons">
                                        <a href="33333" className="add add_size">
                                            <img src="img/arrows.png" alt="arrows" className="add-icons" />
                                        </a>
                                        <a href="444444" className="add add_size">
                                            <img src="img/heart.png" alt="heart" className="add-icons" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <a href="../homework2/single-page.html" className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src="img/6-card.png" alt="item" />
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
                                    <div className="add__icons">
                                        <a href="33333" className="add add_size">
                                            <img src="img/arrows.png" alt="arrows" className="add-icons" />
                                        </a>
                                        <a href="444444" className="add add_size">
                                            <img src="img/heart.png" alt="heart" className="add-icons" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <a href="../homework2/single-page.html" className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src="img/7-card.png" alt="item" />
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
                                    <div className="add__icons">
                                        <a href="33333" className="add add_size">
                                            <img src="img/arrows.png" alt="arrows" className="add-icons" />
                                        </a>
                                        <a href="444444" className="add add_size">
                                            <img src="img/heart.png" alt="heart" className="add-icons" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <a href="../homework2/single-page.html" className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src="img/8-card.png" alt="item" />
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
                                    <div className="add__icons">
                                        <a href="33333" className="add add_size">
                                            <img src="img/arrows.png" alt="arrows" className="add-icons" />
                                        </a>
                                        <a href="444444" className="add add_size">
                                            <img src="img/heart.png" alt="heart" className="add-icons" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <a href="../homework2/single-page.html" className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src="img/9-card.png" alt="item" />
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
                                    <div className="add__icons">
                                        <a href="33333" className="add add_size">
                                            <img src="img/arrows.png" alt="arrows" className="add-icons" />
                                        </a>
                                        <a href="444444" className="add add_size">
                                            <img src="img/heart.png" alt="heart" className="add-icons" />
                                        </a>
                                    </div>
                                </div>
                            </div> --> */}

                            </div>
                        </div>
                    </section>
                    <nav className="pagination-nav" aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                        <a className="pagination-nav__button" href="#">View All</a>
                    </nav>
                </section>
            </section>
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
        </div>
    )
}

export default Product;

import React, { useState } from 'react'
import "./product.scss"
import { ReactComponent as FreeDelivery } from "../../svg/free_delivery.svg"
import { ReactComponent as Sales } from "../../svg/sales.svg"
import { ReactComponent as Quality } from "../../svg/quality.svg"
import { ReactComponent as SubscrInfo } from "../../svg/subscr_info.svg"
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ProductsProducts from '../ProductsProducts/ProductsProducts'
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom'


const Product = () => {
    const [arrayCheckboxes, setArrayCheckboxes] = useState([]);
    const [checkbox0, setCheckbox0] = useState(true);
    const [checkbox1, setCheckbox1] = useState(true);
    const [checkbox2, setCheckbox2] = useState(true);
    const [checkbox3, setCheckbox3] = useState(true);
    const [checkbox4, setCheckbox4] = useState(true);
    const [checkbox5, setCheckbox5] = useState(true);
    const [checkbox6, setCheckbox6] = useState(true);
    const handleCheckbox0 = (e) => {
        setCheckbox0(e.target.checked)
        let array = arrayCheckboxes
        if (!array.includes(e.target.name)) {
            array.push(e.target.name);
        }
        else {
            array = array.filter((el) => el !== e.target.name);
        }
        setArrayCheckboxes(array)
    }
    const handleCheckbox1 = (e) => {
        setCheckbox1(e.target.checked)
        let array = arrayCheckboxes
        if (!array.includes(e.target.name)) {
            array.push(e.target.name)
        }
        else {
            array = array.filter((el) => el !== e.target.name);
        }
        setArrayCheckboxes(array)
    }
    const handleCheckbox2 = (e) => {
        setCheckbox2(e.target.checked)
        let array = arrayCheckboxes
        if (!array.includes(e.target.name)) {
            array.push(e.target.name)
        }
        else {
            array = array.filter((el) => el !== e.target.name);
        }
        setArrayCheckboxes(array)
    }
    const handleCheckbox3 = (e) => {
        setCheckbox3(e.target.checked)
        let array = arrayCheckboxes
        if (!array.includes(e.target.name)) {
            array.push(e.target.name)
        }
        else {
            array = array.filter((el) => el !== e.target.name);
        }
        setArrayCheckboxes(array)
    }
    const handleCheckbox4 = (e) => {
        setCheckbox4(e.target.checked)
        let array = arrayCheckboxes
        if (!array.includes(e.target.name)) {
            array.push(e.target.name)
        }
        else {
            array = array.filter((el) => el !== e.target.name);
        }
        setArrayCheckboxes(array)
    }
    const handleCheckbox5 = (e) => {
        setCheckbox5(e.target.checked)
        let array = arrayCheckboxes
        if (!array.includes(e.target.name)) {
            array.push(e.target.name)
        }
        else {
            array = array.filter((el) => el !== e.target.name);
        }
        setArrayCheckboxes(array)
    }
    const handleCheckbox6 = (e) => {
        setCheckbox6(e.target.checked)
        let array = arrayCheckboxes
        if (!array.includes(e.target.name)) {
            array.push(e.target.name)
        }
        else {
            array = array.filter((el) => el !== e.target.name);
        }
        setArrayCheckboxes(array)
    }
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
                            <input className="size__check" type="checkbox" id="0" name="XXS"
                                checked={checkbox0} onChange={(e) => handleCheckbox0(e)} />
                            <label className="size__checkbox" for="0">XXS</label>
                            <input className="size__check" type="checkbox" id="1" name="XS"
                                checked={checkbox1} onChange={(e) => handleCheckbox1(e)} />
                            <label className="size__checkbox" for="1">XS</label>
                            <input className="size__check" type="checkbox" id="2" name="S"
                                checked={checkbox2} onChange={(e) => handleCheckbox2(e)} />
                            <label className="size__checkbox" for="2">S</label>
                            <input className="size__check" type="checkbox" id="3" name="M"
                                checked={checkbox3} onChange={(e) => handleCheckbox3(e)} />
                            <label className="size__checkbox" for="3">M</label>
                            <input className="size__check" type="checkbox" id="4" name="L"
                                checked={checkbox4} onChange={(e) => handleCheckbox4(e)} />
                            <label className="size__checkbox" for="4">L</label>
                            <input className="size__check" type="checkbox" id="5" name="XL"
                                checked={checkbox5} onChange={(e) => handleCheckbox5(e)} />
                            <label className="size__checkbox" for="5">XL</label>
                            <input className="size__check" type="checkbox" id="6" name="XXL"
                                checked={checkbox6} onChange={(e) => handleCheckbox6(e)} />
                            <label className="size__checkbox" for="6">XXL</label>
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
                        <select className="form-select form-select_show" aria-label="Default select example" >
                            <option className="value" value="0" >06</option>
                            <option className="value" selected value="1" >09</option>
                            <option className="value" value="2">12</option>
                            <option className="value" value="3">15</option>
                            <option className="value" value="4">18</option>
                            <option className="value" value="5">21</option>
                        </select>
                    </nav>
                    <section className="cards">
                        <div className="cards-section">
                            <div className="item-box">
                                <ProductsProducts checkboxes={arrayCheckboxes} />
                            </div>
                        </div>
                    </section>
                    <nav className="pagination-nav" aria-label="Page navigation example">
                        <Pagination count={10} variant="outlined" shape="rounded" />
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

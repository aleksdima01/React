import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Footer1 } from "../../svg/footer1.svg"
import { ReactComponent as Footer2 } from "../../svg/footer2.svg"
import { ReactComponent as Footer3 } from "../../svg/footer3.svg"
import { ReactComponent as Footer4 } from "../../svg/footer4.svg"
import { ReactComponent as Footer5 } from "../../svg/footer5.svg"
const Footer = () => {
    return (
        <div>
            <nav>
                <div className="top-footer">
                    <div className="top-footer-1">
                        <Link to={'/'}>
                            <div className="top-footer-1-logo"> <img src="./img/lef-logo.svg" alt="Левое лого" />
                                <h2 className="BRAN">BRAN<span className="D">D</span> </h2>
                            </div>
                        </Link>
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
                        <Link className="top-footer-a" to={'/'}>
                            Home
                        </Link>
                        <a href="" className="top-footer-a">Shop</a>
                        <a href="" className="top-footer-a">About</a>
                        <a href="" className="top-footer-a">How It Works</a>
                        <a href="" className="top-footer-a">Contact</a>
                    </div>
                    <div className="top-footer-3">
                        <h2 className="top-footer-h2">INFORMATION</h2>
                        <a href="" className="top-footer-a">Tearms & Condition </a>
                        <a href="" className="top-footer-a">Privacy Policy</a>
                        <a href="" className="top-footer-a"> How to Buy</a>
                        <a href="" className="top-footer-a">How to Sell</a>
                        <a href="" className="top-footer-a">Promotion</a>
                    </div>
                    <div className="top-footer-4">
                        <h2 className="top-footer-h2">SHOP CATEGORY</h2>
                        <Link className="top-footer-a" to={'/products'}>
                            Men
                        </Link>
                        <Link className="top-footer-a" to={'/products'}>
                            Women
                        </Link>
                        <Link className="top-footer-a" to={'/products'}>
                            Child
                        </Link>
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

export default Footer;

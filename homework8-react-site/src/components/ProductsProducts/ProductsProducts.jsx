import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Store/cartSlice';
import { Link } from 'react-router-dom';

const ProductsProducts = ({ checkboxes }) => {
    const { productsList, loading, error } = useSelector((state) => state.products);
    const filteredArray = productsList.filter((el) => !checkboxes.includes(el.size.toUpperCase()));
    const dispatch = useDispatch();
    return (
        <>
            {checkboxes.length === 0 || checkboxes.length === 7 ? <>{
                productsList.map(product =>
                    loading ?
                        (< div key={product.id} className="item" >
                            Загрузка...
                        </div >) :
                        <div key={product.id} className="item">
                            <Link to={"/single-page"} className="item-link">
                                <div className="item-link__img">
                                    <img className="item-img" src={product.image} alt="item" />
                                </div>
                                <div className="txt-box">
                                    <p className="description">{product.name}</p>
                                    <p className="item-price">${product.price}</p>
                                </div>
                            </Link>
                            <div className="add-box">
                                <button type='button' className="add" onClick={() => dispatch(addToCart(product))}>
                                    <img src="img/cart-add.svg" alt="cart" className="cart" />
                                    <p className="add-txt">Add to Cart</p>
                                </button>
                                <div className="add__icons">
                                    <a href="#" className="add add_size">
                                        <img src="img/arrows.png" alt="arrows" className="add-icons" />
                                    </a>
                                    <a href="#" className="add add_size">
                                        <img src="img/heart.png" alt="heart" className="add-icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                )
            }</> :
                <>{
                    filteredArray.map(product =>
                        loading ?
                            (< div key={product.id} className="item" >
                                Загрузка...
                            </div >) :
                            <div key={product.id} className="item">
                                <Link to={"/single-page"} className="item-link">
                                    <div className="item-link__img">
                                        <img className="item-img" src={product.image} alt="item" />
                                    </div>
                                    <div className="txt-box">
                                        <p className="description">{product.name}</p>
                                        <p className="item-price">${product.price}</p>
                                    </div>
                                </Link>
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
                    )
                }</>

            }
        </>
    )
}

export default ProductsProducts;

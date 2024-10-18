import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Store/cartSlice';
import { Link } from 'react-router-dom';

const MainProducts = ({ count }) => {
    const dispatch = useDispatch();
    const { productsList, loading } = useSelector((state) => state.products);
    let randomArray = []
    if (count === undefined) {
        return (<>
            {productsList.map(product =>
                loading ?
                    (< div key={product.id} className="products-cards" >
                        Загрузка...
                    </div >) :
                    < div key={product.id} className="products-cards" >
                        <Link to={"/single-page"} className="products-cards1_a">
                            <img className="push_image" src={product.image} alt={product.id} />
                            <h2 className="products-cards-text-h2">{product.name}</h2>
                            <p className="price">${product.price}</p>
                        </Link>
                        <div className="add-to-cart">
                            <button className="add" onClick={() => dispatch(addToCart(product))}>
                                <img src="img/Vector.svg" alt="cart" className="cart" />
                                <p className="add-txt">Add to Cart</p>
                            </button>
                        </div>
                    </div >
            )}
        </>
        )
    }
    else {
        return (<>
            for (const element of object) {

            }
            {productsList.map(product =>
                loading ?
                    (< div key={product.id} className="products-cards" >
                        Загрузка...
                    </div >) :
                    <div className="item">
                        <Link to={"/single-page"} className="item-link">
                            <div className="item-link__img">
                                <img className="item-img" src="img/cart1.png" alt="item" />
                            </div>
                            <div className="txt-box">
                                <p className="description">Mango People T-shirt</p>
                                <p className="item-price">$52.00</p>
                            </div>
                        </Link>
                        <div className="add-box">
                            <button type='button' className="add" >
                                <img src="img/cart-add.svg" alt="cart" className="cart" />
                                <p className="add-txt">Add to Cart</p>
                            </button>
                        </div>
                    </div>

            )}
        </>
        )
    }
}


export default MainProducts;

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Store/cartSlice';
import { Link } from 'react-router-dom';

const MainProducts = ({ count }) => {
    const dispatch = useDispatch();
    const { productsList, loading } = useSelector((state) => state.products);
    let randomArray = [];
    if (count > 0) {

        while (randomArray.length < count) {
            const random = Math.floor(Math.random() * productsList.length);
            if (!randomArray.includes(productsList[random])) {
                randomArray.push(productsList[random])
            }
        }
    }

    console.log(randomArray);
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
            {randomArray.map(product =>
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
}


export default MainProducts;

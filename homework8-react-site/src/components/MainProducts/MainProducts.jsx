import React from 'react'
import { useSelector } from 'react-redux';

const MainProducts = () => {
    const { productsList, loading, error } = useSelector((state) => state.products);
    console.log(productsList)
    productsList.map(product => console.log(product.image))
    return (<>
        {productsList.map(product =>
            loading ?
                (< div className="products-cards1 products-cards" >
                    Загрузка...
                </div >) :
                < div className="products-cards" >
                    <a href="../homework2/single-page.html" className="products-cards1_a">
                        <img className="push_image" src={product.image} alt={product.id} />
                        <h2 className="products-cards-text-h2">{product.name}</h2>
                        <p className="price">${product.price}</p>
                        <div className="add-to-cart">
                            <a href="222222" className="add">
                                <img src="img/Vector.svg" alt="cart" className="cart" />
                                <p className="add-txt">Add to Cart</p>
                            </a>
                        </div>
                    </a>
                </div >
        )}
    </>
    )
}

export default MainProducts;

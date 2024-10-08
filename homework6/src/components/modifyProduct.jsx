import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../store/productSlice';


const ModifyProduct = ({ id }) => {
    const { products } = useSelector((state) => state.products);
    const index = products.findIndex(
        (product) => product.id === id
    );
    const [name, setName] = useState(products[index].name);
    const [description, setDescription] = useState(products[index].description);
    const [price, setPrice] = useState(products[index].price);
    const [available, setAvailable] = useState(products[index].available);
    const [showModify, setShowModify] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct({ name, description, price: parseFloat(price), available, showModify, id }),
        );
    };
    return (
        <div>
            {(products[index].showModify === false) ? (
                <></>
            ) : (
                <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <label>
                        Available:
                        <input
                            type="checkbox"
                            checked={available}
                            onChange={(e) => setAvailable(e.target.checked)}
                        />
                    </label>
                    <button type="submit">Modify</button>
                </form>)}
        </div>

    );
}

export default ModifyProduct;

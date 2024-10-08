import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability, toggleShowModify, updateProduct } from "../store/productSlice";
import ModifyProduct from "./modifyProduct";
import { useState } from "react";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  // console.log("products: ", products);
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  // const displayHandler = () => {
  //   setDisplay(!display);
  // }

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Available: {product.available ? "Yes" : "No"}</p>
                <button onClick={() => dispatch(deleteProduct(product.id))}>
                  Delete
                </button>
                <button onClick={() => dispatch(toggleAvailability(product.id))}>
                  Toggle Availability
                </button>
                <button onClick={() => dispatch(toggleShowModify(product.id))}>
                  Modify product
                </button>
                <ModifyProduct id={product.id} />
              </li>
            ))}
          </ul>

        </>
      )
      }
    </div >
  );
};

export default ProductList;

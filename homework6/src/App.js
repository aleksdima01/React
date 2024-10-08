import './App.css';
import AddProduct from './components/AddProduct';
import ModifyProduct from './components/modifyProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <h1>Product Catalog</h1>
      <AddProduct />
      <ProductList />

    </div>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Checkout from './components/Checkout/Checkout';
import Main from './components/Main/Main';
import SinglePage from './components/SinglePage/SinglePage';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './Store/productsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);



  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">
          Главная
        </NavLink>
        <NavLink to="/checkout">
          О нас
        </NavLink>
        <NavLink to="/single-page">
          Текст
        </NavLink>
        <NavLink to="/products">
          Пункты
        </NavLink>
        <NavLink to="/cart">
          Страница товаров
        </NavLink>
      </nav>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/single-page" element={<SinglePage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route
          path="/goods/:productId"
          element={
            <ConcreteGood goods={goods} />}/> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;

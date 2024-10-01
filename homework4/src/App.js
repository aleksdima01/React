import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import s from "./App.module.css";
import { Box } from "./components/Box/Box";
import { List } from "./components/List/List";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import Goods from "./components/Goods/Goods";
import ConcreteGood from "./components/Goods/ConcreteGood";

const arr = ["пункт 1", "пункт 2", "пункт 3"];
const goods = [
  {
    id: 1,
    title: "Xiaomi",
    price: "30000",
  },
  {
    id: 2,
    title: "Samsung",
    price: "50000",
  },
  {
    id: 3,
    title: "iPhone",
    price: "80000",
  },
];

const App = () => {
  const renderItem = (item, i) => {
    const style = { borderBottom: `1px solid ${i % 2 ? "green" : "red"}` };
    return <article style={style}>{item}</article>;
  };

  const styleActiveLink = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };
  return (
    <BrowserRouter>
      <nav className={s.nav}>
        <NavLink className={styleActiveLink} to="/">
          Главная
        </NavLink>
        <NavLink className={styleActiveLink} to="/about">
          О нас
        </NavLink>
        <NavLink className={styleActiveLink} to="/text">
          Текст
        </NavLink>
        <NavLink className={styleActiveLink} to="/arr">
          Пункты
        </NavLink>
        <NavLink className={styleActiveLink} to="/goods">
          Страница товаров
        </NavLink>
      </nav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/text"
          element={
            <Box customStyle={s.test}>
              <p>Текст внутри Box</p>
            </Box>
          }
        />
        <Route
          path="/arr"
          element={
            <Box>
              <List items={arr} renderItem={renderItem} />
            </Box>
          }
        />
        <Route
          path="/goods"
          element={
            <Box>
              <Goods items={goods} />
            </Box>
          }
        />
        <Route
          path="/goods/:productId"
          element={
            <ConcreteGood goods={goods} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

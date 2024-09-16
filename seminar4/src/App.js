import logo from './logo.svg';
import './App.css';
import Box from './components/box';
import List from './components/list';
import Home from "./components/HomePage";
import About from "./components/AboutPage";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  //const test = { name: "wasd", age: 30 };
  //const array = [{ name: "Петя", age: 36 }, { name: "Вася", age: 48 }, { name: "Дима", age: 29 }]
  const array = ['sad', 'asdasd', 'asdsad'];
  const array2 = [{ title: "iPhone", id: 36, price: 2000 }, { title: "Samsung", id: 48, price: 4000 }, { title: "Huawei", id: 29, price: 3000 }]

  const renderItem = (item, i) => {
    const style = { borderBottom: `1px solid ${i % 2 ? "green" : "red"}` };
    return <li key={i} style={style}>{item}</li>
  }
  return (
    <div className="App">
      {/* <Box>
        <div style={{ color: "red" }}>
          jadsf
        </div>
      </Box>
      <Box>
        <button>Click</button>
      </Box> */}

      <List array={array} func={renderItem} />

      <BrowserRouter>
        <div
          style={{
            display: "flex",
            background: "black",
            padding: "5px 0 5px 5px",
            fontSize: "20px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive
                  ? "greenyellow"
                  : "white",
              })}
            >
              Home
            </NavLink>
          </div>
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive
                  ? "greenyellow"
                  : "white",
              })}
            >
              About
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/about"
            element={<About />}
          />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;

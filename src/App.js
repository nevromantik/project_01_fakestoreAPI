import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Home from "./homepage/home";
import Clothingpage from "./clothingpage/clothingpage";
import Cart from "./cartpage/cart";
import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
export const DataContext = createContext();

function App() {
  const [datas, setData] = useState();
  const [cart, setCart] = useState([]);

  const url = "https://fakestoreapi.com/products";
  const getData = async () => {
    const { data } = await axios.get(url);

    setData(data.slice(0, 6));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Router>
      <ul>
        <li>
          <Link to="/checkout">cart</Link> {cart.length}
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/clothingpage">clothingpage</Link>
        </li>
      </ul>
      <div className="App">
        <DataContext.Provider value={{ datas, setData, cart, setCart }}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/clothingpage"
              element={<Clothingpage></Clothingpage>}
            ></Route>
            <Route path="/checkout" element={<Cart></Cart>}></Route>
          </Routes>
        </DataContext.Provider>
      </div>
    </Router>
  );
}

export default App;

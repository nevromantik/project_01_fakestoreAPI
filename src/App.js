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
import Footer from "./components/Footer/Footer";
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
      <DataContext.Provider value={{ datas, setData, cart, setCart }}>
        <Navbar></Navbar>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/clothingpage"
              element={<Clothingpage></Clothingpage>}
            ></Route>
            <Route path="/checkout" element={<Cart></Cart>}></Route>
          </Routes>
        </div>
      </DataContext.Provider>
    </Router>
  );
}

export default App;

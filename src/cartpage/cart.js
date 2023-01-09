import React, { useState } from "react";
import { DataContext } from "../App";
import { useContext } from "react";
import axios from "axios";
import "./cart.css";
import { Link } from "react-router-dom";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { RiContrastDropLine, RiDeleteBin6Line } from "react-icons/ri";

import { useEffect } from "react";
const url = "https://fakestoreapi.com/products";

function Cart() {
  const [basicPrice, setBasicPrice] = useState();
  const getData = async () => {
    const { data } = await axios.get(url);
    setBasicPrice(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const { datas, setData, cart, setCart, price } = useContext(DataContext);
  const changeAmount = (e, selectedElement) => {
    let currentValue = e.target.value;

    const selectedObj = cart.find((el) => {
      return el.id === selectedElement;
    });
    selectedObj.amount = currentValue;
    console.log(selectedObj);
    setData(
      datas.filter((el) => {
        return el.id !== selectedObj.id;
      })
    );
    setData((prev) => {
      return [...prev, selectedObj];
    });

    const selectedData = basicPrice.find((el) => {
      return el.id === selectedElement;
    });
    console.log(selectedData.price);
    selectedObj.price = selectedObj.amount * selectedData.price;
    console.log(datas);
  };

  const deleteItem = (selectedElement) => {
    const selectedObj = cart.find((el) => {
      return el.id === selectedElement;
    });
    if (cart.includes(selectedObj)) {
      console.log("incluso");
    }
    setCart(
      cart.filter((el) => {
        return el.id !== selectedObj.id;
      })
    );
  };
  return (
    <div className="cart_general_container">
      {cart.length === 0 ? (
        <div className="cart_first_block">
          <h2 className="cart_empty">
            Your Cart is currently empty. <br /> Return to{" "}
            <Link to="/" className="link">
              home
            </Link>
            <div className="cart_empty_icon">
              <MdOutlineRemoveShoppingCart
                fontSize={30}
              ></MdOutlineRemoveShoppingCart>
            </div>
          </h2>
        </div>
      ) : (
        <>
          <h2 className="cart_empty">Shopping Cart</h2>
          <div className="cart_second_block">
            {cart.map((el) => {
              return (
                <>
                  <div className="cart_container_grid" key={el.id}>
                    <img
                      src={el.image}
                      alt={el.title}
                      className="cart_image"
                    ></img>
                    <p className="cart_title">{el.title}</p>
                    <div className="counter_cart">
                      <select
                        onChange={(e) => {
                          changeAmount(e, el.id);
                        }}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                      </select>
                    </div>
                    <p className="cart_price">{el.price}$</p>
                    <div className="cart_icon">
                      <RiDeleteBin6Line
                        onClick={(e) => {
                          e.preventDefault();
                          deleteItem(el.id);
                        }}
                      ></RiDeleteBin6Line>
                    </div>
                  </div>
                </>
              );
            })}{" "}
          </div>{" "}
          <div className="cart_third_block">
            <h3 className="summary">Summary</h3>
            <div className="ctb_2">
              <span className="totalspan">
                <h3>Product: {cart.length}</h3>{" "}
                <h3>
                  Total price:{" "}
                  {cart.reduce((acc, obj) => {
                    return acc + obj.price;
                  }, 0)}{" "}
                  $
                </h3>
              </span>
              <button className="total_btn">CHECKOUT</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
  /*
    <div className="cart_container">
      <div className="general_cart_wrap">
        <span className="items_cart_number">{cart.length} products</span>
        {cart.length === 0 ? (
          <h2 className="items_cart_number">
            Your Cart is currently empty, return to shop
          </h2>
        ) : (
          cart.map((el) => {
            return (
              <>
                <div className="cart_container_grid" key={el.id}>
                  <img
                    src={el.image}
                    className="cart_image"
                    alt={el.title}
                  ></img>
                  <p className="cart_title">{el.title}</p>
                  <div className="counter_cart">
                    <select
                      onChange={(e) => {
                        changeAmount(e, el.id);
                      }}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                  </div>
                  <p className="cart_price">{el.price}$</p>
                  <div className="cart_icon">
                    <RiDeleteBin6Line
                      onClick={(e) => {
                        e.preventDefault();
                        deleteItem(el.id);
                      }}
                    ></RiDeleteBin6Line>
                  </div>
                </div>
              </>
            );
          })
        )}
        <div className="total_cart">
          <p>
            Total:{" "}
            {cart.reduce((acc, obj) => {
              return acc + obj.price;
            }, 0)}{" "}
            $
          </p>
        </div>
      </div>
    </div>
  */
}

export default Cart;

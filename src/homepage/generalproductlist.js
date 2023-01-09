import React from "react";
import { DataContext } from "../App";
import { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./generalproductlist.css";
function Generalproductlist() {
  const { datas, setData, cart, setCart } = useContext(DataContext);

  const addToCart = (selectedElement) => {
    const selected = datas.find((el) => {
      return el.id === selectedElement;
    });
    setCart((prev) => {
      return [...prev, selected];
    });
  };
  return (
    <>
      <h1 className="p_p_h1">Product's preview</h1>

      <div className="products_preview_wrap">
        {datas?.map((product) => {
          return (
            <div className={`p_p_item item-${product.id}  `} key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="p_p_image "
              ></img>
              <p className="p_p_title ">{product.title}</p>
              <p className="p_p_price ">{product.price}$</p>
              <button
                className="p_p_Btn"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product.id);
                }}
              >
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Generalproductlist;

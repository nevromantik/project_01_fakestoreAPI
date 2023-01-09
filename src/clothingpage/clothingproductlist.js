import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import "./clothingproductlist.css";
function Clothingproductlist() {
  const { datas, setData, cart, setCart } = useContext(DataContext);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const [btnVal, setBtnVal] = useState("men's clothing");
  useEffect(() => {
    if (btnVal === "men's clothing")
      setFilteredProduct(
        datas?.filter((el) => {
          return el.category === "men's clothing";
        })
      );
    else if (btnVal === "jewelery")
      setFilteredProduct(
        datas?.filter((el) => {
          return el.category === "jewelery";
        })
      );
    else {
      setFilteredProduct(datas);
    }
  }, [btnVal]);
  console.log(btnVal);
  const addToCart = (selectedElement) => {
    const selected = filteredProduct.find((el) => {
      return el.id === selectedElement;
    });
    setCart((prev) => {
      return [...prev, selected];
    });
  };
  return (
    <div className="products_preview_wrap">
      <button
        className="filtered_btn"
        data-val="men's clothing"
        onClick={(e) => {
          e.preventDefault();
          let val = e.target.getAttribute("data-val");
          setBtnVal(val);
        }}
      >
        men's clothing
      </button>
      <button
        className="filtered_btn"
        data-val="jewelery"
        onClick={(e) => {
          e.preventDefault();
          let val = e.target.getAttribute("data-val");
          setBtnVal(val);
        }}
      >
        jewelery
      </button>

      {filteredProduct?.map((product) => {
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
  );
}

export default Clothingproductlist;

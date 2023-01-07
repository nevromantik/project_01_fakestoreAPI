import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
const style = {
  fontSize: "30px",
  position: "relative",
  left: "150px",
  top: "25px",
};

const style2 = {
  fontSize: "30px",
  position: "relative",
  bottom: "270px",
  left: "50px",
};
const Navbar = (props) => {
  //LA PROPS CONTIENE L'ID DEL PRODOTTO SELEZIONATO IN PREVIEW
  const [sticky, setSticky] = useState();
  const [openMenu, setOpenMenu] = useState(false);
  const [menuClass, setMenuClass] = useState("navbar_menu_close");
  const setNavbar = () => {
    if (window !== undefined) {
      window.scrollY > 100 ? setSticky("onScroll") : setSticky("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", setNavbar);
    return () => {
      window.removeEventListener("scroll", setNavbar);
    };
  }, []);

  const setMenu = () => {
    if (openMenu === false) {
      setOpenMenu(true);
      setMenuClass("navbar_menu_open");
    } else {
      setOpenMenu(false);
      setMenuClass("navbar_menu_close");
    }
  };
  return (
    <>
      <nav className={sticky}>
        <p className="p_navbar">PRODUCT</p>
        <a href="#">CLOTHINGS</a>

        <a href="#">JEWELERY</a>
        <a>ELECTRONICS</a>
        <HashLink smooth to="/#cart_section">
          <BsCart></BsCart>{" "}
        </HashLink>
      </nav>

      <nav className="mobile_navbar">
        <p className="p_mobile_navbar"> PRODUCT</p>
        <AiOutlineMenu style={style} onClick={setMenu}></AiOutlineMenu>
        <div className={menuClass}>
          <GrClose style={style2} onClick={setMenu}></GrClose>
          <a href="#" className="a_mobile">
            Clothings
          </a>
          <a href="#" className="a_mobile">
            Jewelery
          </a>
          <a href="#" className="a_mobile">
            Electronics
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

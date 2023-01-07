import react from "react";
import "./Hero.css";
import img1 from "./hero1.webp";
import img2 from "./hero2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaShuttleVan } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { IoReturnDownBackOutline } from "react-icons/io5";
const Hero = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    draggable: true,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="img_div_carousel1">
          <img src={img1} className="carousel_item"></img>
          <div className="_div_h1_carousel">
            <h1 className="h1_carousel">
              The New Way To Display <br /> Product by <span>Colorlib</span>
              <button className="heroBtn">EXPLORE NOW</button>
            </h1>
          </div>
        </div>
        <div className="img_div_carousel">
          <img src={img2} className="carousel_item"></img>
        </div>
      </Slider>
      <div className="hero_cards">
        <div className="herocard">
          <FaShuttleVan fontSize={40} color={"#BEBEBE"}></FaShuttleVan>
          <h3 className="h3_herocards">WORLDWIDE DELIVERY</h3>
          <p className="p_herocards">
            Far far away, behind the word mountains, <br /> far from the
            countries.
          </p>
        </div>
        <div className="herocard">
          <AiOutlineLock fontSize={40} color={"#BEBEBE"}></AiOutlineLock>
          <h3 className="h3_herocards">SECURE PAYMENTS</h3>
          <p className="p_herocards">
            Far far away, behind the word mountains, <br /> far from the
            countries.
          </p>
        </div>
        <div className="herocard">
          <IoReturnDownBackOutline
            fontSize={40}
            color={"#BEBEBE"}
          ></IoReturnDownBackOutline>
          <h3 className="h3_herocards">SIMPLE RETUNS</h3>
          <p className="p_herocards">
            Far far away, behind the word mountains, <br /> far from the
            countries.
          </p>
        </div>
      </div>
    </>
  );
};
export default Hero;

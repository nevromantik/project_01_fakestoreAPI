import React from "react";
import "./Parallax.css";

const Parallax = (props) => {
  return (
    <>
      <div className="parallax">
        <div className="parallax-content">
          <p className="parallax_p1 parallax_element">Limited Offers 20% OFF</p>
          <h2 className="parallax_h2 parallax_element">Week Deal</h2>
          <p className="parallax_p2 parallax_element">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum{" "}
            <br /> fuga incidunt laboriosam voluptas iure, delectus dignissimos
            facilis <br />
            neque nulla earum.
          </p>
          <button className="parallax_btn ">SHOP NOW</button>
        </div>
      </div>
    </>
  );
};

export default Parallax;

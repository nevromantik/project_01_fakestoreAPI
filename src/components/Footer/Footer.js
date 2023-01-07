import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer_section">
        <h3 className="footer_h3">Help</h3>
        <p className="footer_p">Contact us</p>
        <p className="footer_p">Account</p>
        <p className="footer_p">Shipping</p>
        <p className="footer_p">Returns</p>
        <p className="footer_p">FAQ</p>
      </div>

      <div className="footer_section">
        <h3 className="footer_h3">About</h3>
        <p className="footer_p">About us</p>
        <p className="footer_p">Press</p>
        <p className="footer_p">Careers</p>
        <p className="footer_p">Team</p>
        <p className="footer_p">FAQ</p>
      </div>

      <div className="footer_section">
        <h3 className="footer_h3">Shop</h3>
        <p className="footer_p">Store</p>
        <p className="footer_p">Gift Cards</p>
        <p className="footer_p">Student Discount</p>
      </div>

      <div className="footer_section2">
        <h3 className="footer_h3_2">Join our list and receive exclusives</h3>
        <div className="input_footer">
          <input placeholder="Email address" className="input_footer_2"></input>
          <button className="btn_footer">subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

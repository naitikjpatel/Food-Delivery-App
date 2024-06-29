import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            iusto voluptatibus at maiores libero reprehenderit facere ex error
            assumenda nemo. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Vero, fuga qui quam dolorum ipsam ea saepe ab.
          </p>
          <div className="footer-social-icons">

                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">

            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-342-632-8430</li>
                <li>xyz@tomato.com</li>
            </ul>

        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

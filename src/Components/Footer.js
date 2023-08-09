import React, { useState } from "react";
import "./cstyle.css";
import {
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaMedium,
  FaLinkedin,
  FaYoutube,
  FaProductHunt,
} from "react-icons/fa";
import SVGComponent from "../assets/logo";

const Footer = () => {
  return (
    <Footer className="ftr">
      <div className="container">
        <div className="row">
          <div className="col-md-8 logo">
            <SVGComponent />
          </div>
          <div className="col-md-4">
            <a href="#" className="icons">
              <FaTwitter className="icon" />
            </a>
            <a href="#" className="icons">
              <FaGithub className="icon" />
            </a>
            <a href="#" className="icons">
              <FaDiscord className="icon" />
            </a>
            <a href="#" className="icons">
              <FaLinkedin className="icon" />
            </a>
            <a href="#" className="icons">
              <FaYoutube className="icon" />
            </a>
            <a href="#" className="icons">
              <FaProductHunt className="icon" />
            </a>
            <a href="#" className="icons">
              <FaMedium className="icon" />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footer;

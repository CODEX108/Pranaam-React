import React from "react";
import "../../index.css";
import {LOGO_URL}  from "../utils/config.js";
import Image from"../../bq.png";

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src={Image} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
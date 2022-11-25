import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="">
          <span className="shopLogo">shop</span>
          <span className="cartLogo">cart</span>
        </div>
        <div className="sign-in">
          <img src="Vector.png" alt="" />
          <p>Sign In</p>
        </div>
      </div>
      <div className="hr"></div>

      <div className="search-area">
        <div className="search">
            <div className="map">
                <img src="map.png" alt="" />
                <p>Dhaka, 1212</p>
            </div>
            <div className="input">
                <input type="text" />
                <div className="search-image">
                    <p>Search</p>
                    <img src="search.png" alt="" />
                </div>
            </div>
        </div>
      </div>

      <div className="navs">
        <ul>
            <li><a href="#">Fresh</a></li>
            <li><a href="#">Today’s Deals</a></li>
            <li><a href="#">Mobiles</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Women Clothing</a></li>
            <li><a href="#">Men Clothing</a></li>
            <li><a href="#">Kids Clothing</a></li>
            <li><a href="#">Health</a></li>
            <li><a href="#">Pet corners</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Beauty</a></li>
            <li><a href="#">Kitchen</a></li>
            <li><a href="#">Bed Room</a></li>
            <li><a href="#">Sport</a></li>
            <li><a href="#">Bags</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

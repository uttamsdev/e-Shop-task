import React from "react";
import "./Review.css";
import {AiOutlineStar} from 'react-icons/ai'

const Review = () => {
  return (
    <div className="container">
      <div className="review-text">
        <p>Review your purchase</p>
      </div>
      <div className="mobiles">
        <div className="card">
          <img src="mobile1.png" alt="" />
          <div className="card-info">
            <p>2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB)</p>
            <p>you bought it at the best price</p>
            <p>₹99,900.00</p>
            <div className="rating">
            <AiOutlineStar className="icon"></AiOutlineStar>
            <AiOutlineStar className="icon"></AiOutlineStar>
            <AiOutlineStar className="icon"></AiOutlineStar>
            <AiOutlineStar className="icon"></AiOutlineStar>
            <AiOutlineStar className="icon"></AiOutlineStar>
            <p>0 rating</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="mobile2.png" alt="" />
          <div className="card-info">
            <p>iPhone 14 Pro Max with Apple M1 chip (6.7-inch/17.0 cm, 128GB)</p>
            <p>you bought it at the best price </p>
            <p>₹1,39,900.00</p>
            <div className="rating">
                <AiOutlineStar className="icon"></AiOutlineStar>
                <AiOutlineStar className="icon"></AiOutlineStar>
                <AiOutlineStar className="icon"></AiOutlineStar>
                <AiOutlineStar className="icon"></AiOutlineStar>
                <AiOutlineStar className="icon"></AiOutlineStar>
                <p>0 rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

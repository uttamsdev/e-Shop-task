import React, { useEffect, useState } from "react";
import "./Banner.css";
import SingleProduct from "./SingleProduct";

const Banner = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakeApi.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0,6)));
  }, []);
  return (
    <div className="container">
      <div className="banner">
        <div className="banner-text">
          <p>
            We picked some <span className="cool">cool things</span> for you!
          </p>
        </div>
        <div>
          <p className="hot-deal">hot deals for you</p>
          <div className="products">
            {
              products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

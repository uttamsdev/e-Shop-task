import React from 'react'
import './product.css'

const SingleProduct = (props) => {
    const {_id, name, picture, price, discount} = props.product;
  return (
    <div className='product'>
        <img src={picture} alt="" />
        <p className='name'>{name}</p>
        <div className='price-sec'>
            <p>₹{price}</p>
            <p className='discount'>-{discount}% off</p>
        </div>
    </div>
  )
}

export default SingleProduct;
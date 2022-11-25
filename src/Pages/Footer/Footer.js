import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-area'>
            <div>
                <span className='footer-logo'>shop</span><span className='span-2'>cart</span>
            </div>
            <div className='list'>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            <div className='last'>
                <a href="#">English</a>
            </div>
        </div>
    </div>
  )
}

export default Footer;
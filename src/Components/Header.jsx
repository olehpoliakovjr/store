import React from "react";

import logo from '../assets/logo2.png'
import like from '../assets/like.png'
import cart from '../assets/cart2.png'
import profile from '../assets/profile.png'


const Header = () => {
  return(
    <header>
      <div className='header-left'>
        <img src={logo} alt="logo" style={{width: 50, height: 50}}/>
        <div>
            <a href='#'><h2 className='shop-name'>Sneakers shop</h2></a>
            <p>Best sneakers shop</p>
        </div>
      </div>
      <ul className='header-right'>
        <li className='cart-and-sum'>
            <img src={cart} style={{width: 30, height:30}} alt="cart"/>
            <span>130$</span>
        </li>
        <li>
            <img src={like} alt="liked" style={{width: 25, height:25}} />
        </li>
        <li>
            <img src={profile} alt="profile" style={{width: 25, height:25}} />
        </li>  
      </ul>
    </header>
  )
}

export default Header;
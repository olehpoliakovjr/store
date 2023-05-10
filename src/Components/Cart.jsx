import React from "react";

import remove from '../assets/remove.png'
import arrow from '../assets/arrow.png'
import one from '../assets/1.jpg'

const Cart = () => {
    return(
        // overlay-shadow - это тень когда открываем корзину, aside-cart сам блок корзины
        <div className='overlay-shadow'> 
            <div className='aside-cart'>
                <div className='cartTop'>
                    <h2>Cart</h2>
                    <img className='closeCardBtn' src={remove} alt="remove" style={{width:20, height:20}}/>
                </div>
                {/* каждый элемент в корзине */}
                <div className='items'>
                    <div className="cartItem">
                        <img className='cartItemImage' style={{width:80,height:80}} src={one} alt="one" />
                        <div>
                            <p>Men's Nike Blazer Mid Suede Sneakers</p>
                            <b>190$</b>
                        </div>
                        <img className='removeBtn' src={remove} alt="remove" style={{width:25, height:25}}/>
                    </div>
                    <div className="cartItem">
                        <img className='cartItemImage' style={{width:80,height:80}} src={one} alt="one" />
                        <div>
                            <p>Men's Nike Blazer Mid Suede Sneakers</p>
                            <b>190$</b>
                        </div>
                        <img className='removeBtn' src={remove} alt="remove" style={{width:25, height:25}}/>
                    </div>
                </div>
            <div className='cartTotalBlock'>
                <ul>
                    <li>
                        <span>Sum:</span>
                        <div></div>
                        <b>485$</b>
                    </li>
                    <li>
                        <span>Tax 5%:</span>
                        <div></div>
                        <b>25$</b>
                    </li>
                </ul>
                    <button className='mainButton'>Place an order
                        <img style={{height:25,width:25}} src={arrow} alt='arrow'></img>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
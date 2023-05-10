import { useState } from 'react'
import './App.scss'
import logo from './assets/logo.png'
import like from './assets/like.png'
import cart from './assets/cart.png'
import profile from './assets/profile.png'
import add from './assets/add.png'
import added from './assets/added.png'
import search from './assets/search.png'
import unliked from './assets/heart-unliked.png'
import liked from './assets/heart.png'
import remove from './assets/remove.png'
import arrow from './assets/arrow.png'

import one from './assets/1.jpg'
import two from './assets/2.jpg'
import three from './assets/3.jpg'
import four from './assets/4.jpg'
import five from './assets/5.jpg'




function App() {
  return (
    <div className='wrapper'>
        {/* overlay-shadow - это тень когда открываем корзину, aside-cart сам блок корзины */}
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
      <header>
        <div className='header-left'>
            <img src={logo} alt="logo" style={{width: 40, height: 40}}/>
            <div>
                <a href='#'><h2 className='shop-name'>Sneakers shop</h2></a>
                <p>Best sneakers shop</p>
            </div>
        </div>
        <ul className='header-right'>
                <li className='cart-and-sum'>
                    <img src={cart} style={{width: 32, height:32}} alt="cart"/>
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
      <main>
        <div className='main-top'>
            <h1>All sneakers</h1>
            <div className='search'>
                <img src={search} alt="search" style={{width:30, height:30}} />
                <input type="text" placeholder='Search..' />
            </div>
        </div>
        <div className='sneakers'>
            <div className='shoes-card'>
                <div className='favorite'>
                <img src={unliked} alt='unliked' style={{width:30, height:30}}></img>
                </div>
                <img src={one} alt="sneakers" style={{width:133,height:120}}/>
                <p>Men's Nike Blazer Mid Suede Sneakers</p>
                <div className='card-bottom'>
                    <div>
                        <span>Price</span>
                        <b>190$</b>
                    </div>
                    <button>
                        <img src={add} alt="addIcon" style={{width: 30, height:30}}/>
                    </button>
                </div>
            </div>
            <div className='shoes-card'>
                <img src={two} alt="sneakers" style={{width:133,height:120}}/>
                <p>Men's Nike Blazer Mid Suede Sneakers</p>
                <div className='card-bottom'>
                    <div>
                        <span>Price</span>
                        <b>190$</b>
                    </div>
                    <button>
                        <img src={add} alt="addIcon" style={{width: 30, height:30}}/>
                    </button>
                </div>
            </div>
            <div className='shoes-card'>
                <img src={three} alt="sneakers" style={{width:133,height:120}}/>
                <p>Men's Nike Blazer Mid Suede Sneakers</p>
                <div className='card-bottom'>
                    <div>
                        <span>Price</span>
                        <b>190$</b>
                    </div>
                    <button>
                        <img src={add} alt="addIcon" style={{width: 30, height:30}}/>
                    </button>
                </div>
            </div>
            <div className='shoes-card'>
                <img src={four} alt="sneakers" style={{width:133,height:120}}/>
                <p>Men's Nike Blazer Mid Suede Sneakers</p>
                <div className='card-bottom'>
                    <div>
                        <span>Price</span>
                        <b>190$</b>
                    </div>
                    <button>
                        <img src={add} alt="addIcon" style={{width: 30, height:30}}/>
                    </button>
                </div>
            </div>
            <div className='shoes-card'>
                <img src={five} alt="sneakers" style={{width:133,height:120}}/>
                <p>Men's Nike Blazer Mid Suede Sneakers</p>
                <div className='card-bottom'>
                    <div>
                        <span>Price</span>
                        <b>190$</b>
                    </div>
                    <button>
                        <img src={add} alt="addIcon" style={{width: 30, height:30}}/>
                    </button>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default App

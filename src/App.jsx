import { useState } from 'react'
import './App.scss'
import logo from './assets/logo.png'
import like from './assets/like.png'
import cart from './assets/cart.png'
import profile from './assets/profile.png'
import add from './assets/add.png'
import added from './assets/added.png'

import one from './assets/1.jpg'
import two from './assets/2.jpg'
import three from './assets/3.jpg'
import four from './assets/4.jpg'
import five from './assets/5.jpg'




function App() {
  return (
    <div className='wrapper'>
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
            <input type="text" placeholder='Search..' />
        </div>
        <div className='sneakers'>
            <div className='shoes-card'>
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

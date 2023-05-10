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


import Card from './Components/Card'
import Header from './Components/Header'
import Cart from './Components/Cart'


function App() {
  return (
    <div className='wrapper'>
        <Cart/>
        <Header/>
      <main>
        <div className='main-top'>
            <h1>All sneakers</h1>
            <div className='search'>
                <img src={search} alt="search" style={{width:30, height:30}} />
                <input type="text" placeholder='Search..' />
            </div>
        </div>
        <div className='sneakers'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
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

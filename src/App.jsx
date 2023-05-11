import { useState } from 'react'
import './App.scss'

import search from './assets/search.png'

import one from './assets/1.jpg'
import two from './assets/2.jpg'
import three from './assets/3.jpg'
import four from './assets/4.jpg'
import five from './assets/5.jpg'

import Card from './Components/Card'
import Header from './Components/Header'
import Cart from './Components/Cart'



const sneakersArray = [
    {title: "Men's Nike Blazer Mid Suede Sneakers", price: 190,image: one},
    {title: "Men's Nike Air Max 270 Sneakers", price: 170,image: two},
    {title: "Men's Nike Blazer Mid Suede Sneakers", price: 190,image: three},
    {title: "Puma X Aka Boku Future Rider Sneakers", price: 185,image: four},
    {title: "Men's Under Armour Curry 8 Sneakers", price: 255,image: five},
]

function App() {
	return (
		<div className="wrapper">
			<Cart />
			<Header />
			<main>
				<div className="main-top">
					<h1>All sneakers</h1>
					<div className="search">
						<img
							src={search}
							alt="search"
							style={{ width: 30, height: 30 }}
						/>
						<input type="text" placeholder="Search.." />
					</div>
				</div>
				<div className="sneakers">
					{sneakersArray.map((obj) => (
						<Card
							title={obj.title}
							image={obj.image}
							price={obj.price}
						/>
					))}
				</div>
			</main>
		</div>
	);
}

export default App

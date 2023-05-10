import React from "react";
import unliked from '../assets/heart-unliked.png'
import one from '../assets/1.jpg'
import add from '../assets/add.png'
const Card = (props) => {
    return(
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
    )
}

export default Card;
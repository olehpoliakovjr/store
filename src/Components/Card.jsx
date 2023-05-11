import React from "react";
import unliked from '../assets/heart-unliked.png'
import liked from '../assets/heart.png'
import add from '../assets/add.png'
import added from '../assets/added.png'


const Card = (props) => {
  return(
  <div className='shoes-card'>
    <div className='favorite'>
        <img src={unliked} alt='unliked' style={{width:30, height:30}}></img>
    </div>
    <img src={props.image} alt="sneakers" style={{width:133,height:120}}/>
    <p>{props.title}</p>
    <div className='card-bottom'>
        <div>
            <span>Price</span>
            <b>{props.price}$</b>
        </div>
        <button onClick={() => alert(1)}>
            <img src={add} alt="addIcon" style={{width: 30, height:30}}/>
        </button>
    </div>
  </div>
  )
}

export default Card;
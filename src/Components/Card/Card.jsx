import React from "react";
import unliked from '../../assets/heart-unliked.png'
import liked from '../../assets/heart.png'
import add from '../../assets/add.png'
import added from '../../assets/added.png'

import { useState, useEffect } from "react";
import cardStyles from './Card.module.scss'; // модуль стилей


const Card = (props) => {

  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsliked] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded); // это означает, что когда я вызываю эту функцию, то значение которое в ней есть - инвертируется
  }

  const onClikeFavorite = () => {
    setIsliked(!isLiked)
  }

  useEffect(() => {
    console.log('state was changed..')
  },[isAdded]) // второй аргумент это зависимость : если изменить стейт isAdded, то выполниться какая-то логика
  // другими словами, useEffect следит за изменениями isAdded

  return(
  <div className={cardStyles.card}>
    <div className={cardStyles.favorite}>
        <img onClick={onClikeFavorite} src={isLiked ? liked : unliked} alt='unliked' style={{width:30, height:30}}></img>
    </div>
    <img src={props.image} alt="sneakers" style={{width:133,height:120}}/>
    <p>{props.title}</p>
    <div className={cardStyles.cardBottom}>
        <div>
            <span>Price</span>
            <b>{props.price}$</b>
        </div>
        <img className={cardStyles.plus} onClick={onClickPlus} src={isAdded ? added : add} alt="addIcon" style={{width: 30, height:30}}/>
    </div>
  </div>
  )
}

export default Card;
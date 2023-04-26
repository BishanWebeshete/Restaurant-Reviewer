import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

function StarRating ({rating}) {
  const style = { color: "yellow" }

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<AiFillStar style={style}/>)
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<BsStarHalf style={style}/>)
    }
    else {
      stars.push(<AiOutlineStar style={style}/>)
    }
  }
  return (
    <>
    {stars}
    </>
  )
}

export default StarRating

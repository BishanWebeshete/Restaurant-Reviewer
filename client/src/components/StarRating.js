import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

function StarRating ({rating}) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<AiFillStar/>)
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<BsStarHalf/>)
    }
    else {
      stars.push(<AiOutlineStar/>)
    }
  }
  return (
    <>
    {stars}
    </>
  )
}

export default StarRating
